import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommuneComponent } from './components/commune/commune.component';
import { DepartementTableComponent } from './components/departement-table/departement-table.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'commune', component: CommuneComponent},
  {path: 'departements', component: DepartementTableComponent},
  {path:'*', pathMatch:"full", redirectTo: "/commune"},
  {path:"", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
