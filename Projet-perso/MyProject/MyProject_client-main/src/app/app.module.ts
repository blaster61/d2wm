import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptorProviders } from './_helper/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { HeaderComponent } from './components/header/header.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './component/articles/articles.component';
import { CategoryComponent } from './component/category/category.component';
import { ContactComponent } from './component/contact/contact.component';
import { CGUComponent } from './component/cgu/cgu.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { CookieService } from 'ngx-cookie-service';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'  
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SinglePostComponent,
    HeaderComponent,
    CreatePostComponent,
    EditPostComponent,
    UserIndexComponent,
    EditUserComponent,
    FooterComponent,
    ArticlesComponent,
    CategoryComponent,
    ContactComponent,
    CGUComponent,
    RgpdComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    
  ],
  providers: [AuthInterceptorProviders,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
