import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/_services/post.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent {
  //on définit ici les variables nécessaires
  //users stockera les users récupérés dans le back
  posts: any = [];
  //loading dira si un chargement est en cours
  loading: boolean = false;
  //admin dira si le user connecté est un admin
  admin: boolean = false;
  // Compteur sur l'index
  count: number = 1;

  tampon: any = []

  // Le message qui apparait en dessous pour supprimer un utilisateur
  isDelete = false;

  // l'auteur
  author: any = [];
  nameAuthor: any;


  constructor(private postService: PostService, private userService: UserService, private tokenStorageService: TokenStorageService) {}

  //au chargement, on lance getUsers()
  ngOnInit(): void {
    if(this.tokenStorageService.getUser().admin){
      this.admin = true;
    }
    this.getPosts();
    
    // this.getAuthor(this.author)
    
   
  }

  // public getCount(){
  //  return this.count++;
  // }
  //getUsers() récupèrera tous les users pour les stocker dans this.users
  //!cette méthode ne sera accessible qu'à un admin
  public getPosts() {
    this.loading = true;
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
      

      // Pour la gestion de l'affichage à gauche d'un index commençant à 1
        this.posts.forEach((el: any) => {
        el.count = this.count++
    
        // Formatage de la date
        el.createdAt = new Date(el.createdAt).toLocaleDateString("fr")
        
        

        
      })
    
    },
    (error) => {
      console.error('request failed with error',error.message);
      this.loading = false;
    }), () => {
      this.loading = false;
      console.log('request completed');
      
    };
   
  }

  


  public deletePost(postId: string){
    if(confirm("Voulez-vous vraiment supprimer cet article? Cette action est irreversible")){

      this.postService.deletePost(postId).subscribe(
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
}
