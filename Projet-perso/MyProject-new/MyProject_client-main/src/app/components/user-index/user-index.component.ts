import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {
  //on définit ici les variables nécessaires
  //users stockera les users récupérés dans le back
  users: any = [];
  //loading dira si un chargement est en cours
  loading: boolean = false;
  //admin dira si le user connecté est un admin
  admin: boolean = false;
  // Compteur sur l'index
  count: number = 1;

  // Le message qui apparait en dessous pour supprimer un utilisateur
  isDelete = false;


  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) {}

  //au chargement, on lance getUsers()
  ngOnInit(): void {
    if(this.tokenStorageService.getUser().admin){
      this.admin = true;
    }
    this.getUsers();
    
  }

  // public getCount(){
  //  return this.count++;
  // }
  //getUsers() récupèrera tous les users pour les stocker dans this.users
  //!cette méthode ne sera accessible qu'à un admin
  public getUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe((data) => {
      this.users = data;

      // Pour la gestion de l'affichage à gauche d'un index commençant à 1
      this.users.forEach((el: any) => {
        el.count = this.count++
      // Formatage de la date
      el.createdAt = new Date(el.createdAt).toLocaleDateString("fr")
     
    
      });
    },
    (error) => {
      console.error('request failed with error',error.message);
      this.loading = false;
    }), () => {
      this.loading = false;
      console.log('request completed');
    };
  }


  public deleteUser(userId: string){
    if(confirm("Voulez-vous vraiment supprimer cet utilisateur? Cette action est irreversible")){
        this.userService.deleteUser(userId).subscribe(
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
