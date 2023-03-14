import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{


  
  form: any ={
    
    comment: null
  }
  constructor(private tokenStorage: TokenStorageService,
     private postService: PostService,
     private route: ActivatedRoute){ }
  // On va vérifier que l'utilisateur est bien connecté avant de pouvoir accéder au form
  isLogged = false;
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

  idPost = "";

  idAuthor: any;

  ngOnInit(): void{
    if(this.tokenStorage.getUser()){
      
      console.log(this.idUser = this.tokenStorage.getUser())
      this.idUser = this.tokenStorage.getUser().userId
      this.isLogged = true;
    }
    // this.isLogged = false;
    this.idPost = String(this.route.snapshot.paramMap.get("id"));
    this.author = this.tokenStorage.getUser().login
    this.idAuthor = this.tokenStorage.getUser().userId
    console.log(this.idAuthor
      );
    
  }


  onSubmit(): void{
    const {comment} = this.form;
    this.postService.createComment(this.idPost,this.author, this.idAuthor,comment).subscribe(
      data => {
        console.log(data);
        this.isPublished = true;
        location.reload()
      },
      err => {
        this.errorMessage = err.error.message;
        this.isPublished = false;
        this.isLogged = false;
      }
    )
      


  }

}
