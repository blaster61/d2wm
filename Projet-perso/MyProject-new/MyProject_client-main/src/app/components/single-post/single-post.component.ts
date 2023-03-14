import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { User } from 'src/app/user';
import { PostService } from 'src/app/_services/post.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  //on définit ici les variables nécessaire
  //id stockera l'id du post qu'on veut afficher, récupéré dans l'url
  id: string = '';
  isDelete = false;
  //post stockera le post récupéré
  @Input() post?: Post;
  //author stockera les user correspondant à l'auteur du post, dans le back, s'il existe
  @Input() author?: User;
  //user stockera les informations du user connecté s'il existe
  @Input() user?: any;
  
  constructor(private userService: UserService, private postService: PostService, private route: ActivatedRoute, private tokenStorageService: TokenStorageService) {};

  //au chargement, on récupère l'id du post demandé dans l'url et on utilise getPost(). On récupère aussi les données du user connecté grâce au sessionStorage
  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.getPost(this.id);
    this.user = this.tokenStorageService.getUser();
  }

  //cette méthode récupère un post par son id dans le back grâce au PostService. Elle lance aussi getAuthor()
  public getPost(id: string) {
    this.postService.getPostById(id).subscribe(post => {
      this.post = post;
      console.log(post);
      this.getAuthor(post.author)
    }
      );
  }

  //cette méthode permet de récupérer un user par son id dans le back
  //! cette méthode n'est accessible que par un admin
  public getAuthor(authorId: string) {
    console.log(authorId);
    this.userService.getUser(authorId).subscribe(user => {
      this.author = user;
      console.log(user);
    });
  }

  public deletePost(postId: string){
    this.postService.deletePost(postId).subscribe(
      () => {
        this.isDelete = true;
        console.log("Suppression effectuée")
        setTimeout(() => {
          
          window.location.href = 'http://localhost:4200'
        }, 3000);
      }
      
    )
  }
}
