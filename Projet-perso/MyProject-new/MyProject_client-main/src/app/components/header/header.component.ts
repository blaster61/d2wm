import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() searchQuery: any = [];
  @Output() loadSearch: EventEmitter<{}> = new EventEmitter();
  //on définit les variables nécessaires
  title:string = "Blog";
  //isLoggedIn stockera un booléen qui dira si un user est connecté ou non
  isLoggedIn: boolean = false;
  //admin dira si le user connecté est un admin
  admin: boolean = false;
  //user stockera le login du user connecté
  user: string = '';
  search = "";
  form: any = {
    query: null
  }


  constructor(private tokenStorageService: TokenStorageService, private postService: PostService) {}

  //au chargement du composant, on renseigne les différentes variables définies plus haut
  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.isLoggedIn = true;
      this.user = this.tokenStorageService.getUser().login;
    }

    if(this.tokenStorageService.getUser().admin) {
      this.admin = true;
    }
  }

  // onChange(event: any): void{
  //   let { query } = this.form
  //   query = event.target.value
  //   this.search(query)

  // }

getLength(): number{
  return this.searchQuery
  .filter((query: any) =>
   
   
  query.title.toLowerCase().includes(this.search.toLowerCase())
    ||
    query.content.includes(this.search)
    )
    .length
}

getPosts(): any{


  return this.searchQuery
  .filter((query: { title: string; content: string | any[]; }) => 
    query.title.toLowerCase().includes(this.search.toLowerCase())
    ||
    query.content.includes(this.search))

}


  // public search(query: string){
  //   this.postService.getSearch(query).subscribe(
  //   (result) => {
  //     console.log(result);
  //   }
  //   )
  // }

  //la méthode logout permettra de se déconnecter et sera déclenchée en cliquant sur le lien correspondant
  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    window.location.reload();
  }



}
