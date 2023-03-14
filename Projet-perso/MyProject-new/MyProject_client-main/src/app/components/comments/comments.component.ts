import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { User } from 'src/app/user';
import { PostService } from 'src/app/_services/post.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
//id stockera l'id du post qu'on veut afficher, récupéré dans l'url
id: string = '';
isDelete = false;
// Pour vérifier s'il agit de l'utilisateur pour édition
isAuthor = false;
isAdmin = false;
idPost: any;
//post stockera le post récupéré
user?: any;
post?: any
author?: User
comments: any;

constructor(private userService: UserService, private postService: PostService, private route: ActivatedRoute, private tokenStorageService: TokenStorageService) {};

//au chargement, on récupère l'id du post demandé dans l'url et on utilise getPost(). On récupère aussi les données du user connecté grâce au sessionStorage
ngOnInit(): void {
  this.id = String(this.route.snapshot.paramMap.get('id'));
  this.getComments(this.id);
  this.user = this.tokenStorageService.getUser();
  
  
}

//cette méthode récupère un post par son id dans le back grâce au PostService. Elle lance aussi getAuthor()
public getComments(id: string) {
  this.postService.getPostById(id).subscribe(post => {
    this.post = post;

 
    console.log(this.post);
    this.getAuthor(post.author)
    this.comments= post.comments, 
    //Afficher le commentaire le plus récent en premier
    this.comments.reverse();
    console.log(this.comments);
    this.comments.forEach((element: {
      _id: any; login: any; 
}) => {
      if(this.user.login === element.login){
         this.isAuthor = true
         this.idPost = post._id
      }
      if(this.user.admin){
        this.isAdmin = true
        this.idPost = post._id
      }
      if(!this.user.login === element.login){
        this.isAuthor = false;
        this.isAdmin = false;
      }
      
    })
 
  }
    );
}

//cette méthode permet de récupérer un user par son id dans le back
//! cette méthode n'est accessible que par un admin
public getAuthor(authorId: string) {
  this.userService.getUser(authorId).subscribe(user => {
    this.author = user;
  });
}



public deleteComment(idComment: string){
  console.log(idComment);
  
  this.postService.deleteComment(this.idPost, idComment).subscribe(
    () => {
      this.isDelete = true;
      console.log("Suppression effectuée")
      setTimeout(() => {
        
        window.location.reload()
      }, 1500);
    }
    
  )
}
}
