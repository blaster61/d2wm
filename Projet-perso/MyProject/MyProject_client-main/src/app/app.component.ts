import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {  NgcCookieConsentService  }  from 'ngx-cookieconsent' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  constructor(private ngCookieService:NgcCookieConsentService ){

  }
ngOnInit(){
   this.ngCookieService.init(this.ngCookieService.getConfig())
}
}
