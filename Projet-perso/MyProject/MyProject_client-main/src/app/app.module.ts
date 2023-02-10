import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptorProviders } from './_helper/auth.interceptor';
import { FormsModule } from '@angular/forms';
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
