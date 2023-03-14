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
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import { PostIndexComponent } from './components/post-index/post-index.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { PostService } from './_services/post.service';
import { CommentsComponent } from './components/comments/comments.component';


const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'
  },

  "position": "bottom",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#f1d600",
      "text": "#000000",
      "border": "transparent"
    }
  
  },
  "type": "opt-out",
  "content": {
    "message": "Ce site web utilise des cookies pour vous assurer la meilleure expérience de navigation sur notre site.",
    "dismiss": "OK, j'ai compris!",
    "deny": "Refuser",
    "link": "Plus d'information  ",
    "href": "rgpd",
    "policy": " Politiques des cookies ",
    "header": "Cookies sur le site!",
    "allow": "Autoriser les cookies"
  }
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
    PostIndexComponent,
    AddCommentComponent,
    CommentsComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    
  ],
  providers: [AuthInterceptorProviders, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
