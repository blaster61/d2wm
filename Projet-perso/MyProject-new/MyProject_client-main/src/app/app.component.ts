import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {  NgcCookieConsentService  }  from 'ngx-cookieconsent' ;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchQuery: any= [];

  title = 'Blog';
  constructor(private httpClient: HttpClient,
    private ngCookieService:NgcCookieConsentService ){

  }

  loadSearch(): void{
    this.httpClient.get<any>("http://localhost:4000/post")
    .subscribe(
      data =>{
        this.searchQuery = data;;

      }
    )
  }

ngOnInit(){
   this.ngCookieService.init(this.ngCookieService.getConfig())
}
}
