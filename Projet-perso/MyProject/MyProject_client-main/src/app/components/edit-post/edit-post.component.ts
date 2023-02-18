import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { User } from 'src/app/user';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { PostService } from '../../_services/post.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  constructor(private tokenStorage: TokenStorageService, private postService: PostService, private route: ActivatedRoute, private userService: UserService) {}
  //on définit les variables nécessaires :
  //form contiendra les valeurs entrées dans le formulaire
  form: any = {
    title: null,
    content: null    
  }
  //admin dira si le user connecté a le statut admin
  admin = false;
  //isPublished dira si le post est publié ou non
  isPublished = false;
  //errorMessage stockera le message d'erreur éventuel
  errorMessage = '';
  //idUser stockera l'id du user connecté
  idUser = '';
  //id stockera l'id du post qui est en cours de modification
  id:string = '';
  //post contiendra le post en cours de modification et ses propriétés, récupérés depuis le back
  @Input() post?: Post
  // user contiendra les informations sur le user connecté, récupérées dans sessionStorage
  @Input() user?: any
  // author contiendra les informations sur l'auteur de post, récupérées depuis le back
  //!logiquement ces informations ne sont accessibles qu'à un admin. Si on veut autoriser un autre rôle à accéder à ces informations il faut le préciser en back
  @Input() author?: User

  //au chargement du composant on vérifie si le user connecté a le statut admin grâce à son token, et on récupère l'id de celui-ci pour pouvoir renseigné la propriété author du post qui sera éventuellement créé. On récupère l'id dans l'url de la route, et on récupère le post correspondant à cet id dans le back, que l'on stocke dans this.post. Ce traitement stockera aussi l'auteur dans this.author 
  ngOnInit(): void {
    if(this.tokenStorage.getUser().admin) {
      this.admin = true;
      this.user = this.tokenStorage.getUser();
    }
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getPost(this.id);
    console.log("Utilisateur connecté: ", this.user);
  }

  //cette méthode permet de récupérer un post par son id grâce au PostService et lance aussi la récupération de l'auteur avec getAuthor() (voire plus bas). Les informations récupérées sont stockées dans this.form
  public getPost(id: string) {
    this.postService.getPostById(id).subscribe(post => {
      this.post = post;
      console.log(post);
      this.getAuthor(post.author)
      this.form.title = post.title;
      this.form.content = post.content;
    }
      );
  }

  //cette méthode récupère un user dans le back grâce à son id
  //! cette route nécessite un profil admin
  public getAuthor(authorId: string) {
    this.userService.getUser(authorId).subscribe(user => {
      this.author = user;
      console.log("author: ", user);
    });
  }

  //quand le formulaire est soumis, on sollicite la méthode updatePost() de PostService à laquelle on donne en arguments les valeurs récupérées dans les champs title et content du formulaire.
  //!on testera si le user connecté et l'auteur du post correspondent pour autoriser la modification. On peut aussi ajouter cette condition dans le template pour complètement empêcher l'affichage du formulaire d'édition si le user connecté n'est pas l'auteur.
  onSubmit(): void {
    if(this.user && this.author && this.user.id === this.author._id ){
      const { title, content } = this.form;
      this.postService.updatePost(this.id, title, content).subscribe(
        data => {
          console.log(data);
          this.isPublished = true;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isPublished = false;
        }
      )
    } else {
      this.errorMessage = "Vous n'êtes pas autorisé à modifier cet article";
    }
  }
}
