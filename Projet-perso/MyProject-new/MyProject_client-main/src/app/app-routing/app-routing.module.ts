import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { CreatePostComponent } from '../components/create-post/create-post.component';
import { HomeComponent } from '../components/home/home.component';
import { SinglePostComponent } from '../components/single-post/single-post.component';
import { EditPostComponent } from '../components/edit-post/edit-post.component';
import { UserIndexComponent } from '../components/user-index/user-index.component';
import { EditUserComponent } from '../components/edit-user/edit-user.component';
import { ArticlesComponent } from '../component/articles/articles.component';
import { CategoryComponent } from '../component/category/category.component';
import { ContactComponent } from '../component/contact/contact.component';
import { RgpdComponent } from '../component/rgpd/rgpd.component';
import { CGUComponent } from '../component/cgu/cgu.component';
import { PostIndexComponent } from '../components/post-index/post-index.component';

//on met les différentes routes en place ici
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "publish", component: CreatePostComponent },
  { path: "user-index", component: UserIndexComponent },
  { path: "post-index", component: PostIndexComponent},
  { path: "post/:id", component: SinglePostComponent },
  { path: "edit/:id", component: EditPostComponent },
  { path: "edit-user/:id", component: EditUserComponent},
  { path: "articles", component: ArticlesComponent },
  { path: "category", component: CategoryComponent },
  { path: "contact", component: ContactComponent },
  { path: "rgpd", component: RgpdComponent },
  { path: "CGU", component: CGUComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
