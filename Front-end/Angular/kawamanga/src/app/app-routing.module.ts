import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SincrireComponent } from './sincrire/sincrire.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"connexion",component:ConnexionComponent},
  {path:"sincrire",component:SincrireComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
