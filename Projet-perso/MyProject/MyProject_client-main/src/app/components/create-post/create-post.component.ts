import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { PostService } from '../../_services/post.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  constructor(private tokenStorage: TokenStorageService, private postService: PostService) {}
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
  //author renseignera la propriété author du post qui sera créé
  author = '';

  //au chargement du composant on vérifie si le user connecté a le statut admin grâce à son token, et on récupère l'id de celui-ci pour pouvoir renseigné la propriété author du post qui sera éventuellement créé.
  ngOnInit(): void {
    if(this.tokenStorage.getUser().admin) {
      this.admin = true;
      this.author = this.tokenStorage.getUser().userId;
    }
    this.author = this.tokenStorage.getUser().userId;
  }

  //quand le formulaire est soumis, on sollicite la méthode createPost() de PostService à laquelle on donne en arguments les valeurs récupérées dans les champs title et content du formulaire. L'argument author est renseigné grâce à la propriété author du composant renseignée dans ngOnInit() (voire ci-dessus)
  onSubmit(): void {
    const { title, content } = this.form;
    this.postService.createPost(title, content, this.author).subscribe(
      data => {
        console.log(data);
        this.isPublished = true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isPublished = false;
      }
    )
  }
}
