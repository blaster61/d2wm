import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {  NgcCookieConsentService  }  from 'ngx-cookieconsent' ;
import { CookieService } from 'ng2-cookies';
import { TranslateService } from '@ngx-translate/core';

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

