import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommuneComponent } from './components/commune/commune.component';
import { DepartementTableComponent } from './components/departement-table/departement-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommuneTableComponent } from './components/commune-table/commune-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HeaderComponent } from './header/header.component';
import { CommuneGraphComponent } from './components/commune-graph/commune-graph.component'
import {TabsModule} from 'ngx-bootstrap/tabs';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    CommuneComponent,
    DepartementTableComponent,
    CommuneTableComponent,
    HeaderComponent,
    CommuneGraphComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // À ajouter MANUELLEMENT pour récupérer les méthodes GET, POST etc.
    ToastrModule.forRoot(),
    FormsModule, // À ajouter OBLIGATOIREMENT POUR LA PAGINATION
    PaginationModule, // À ajouter MANUELLEMENT pour faire fonctionner le module
    NgbModule,
    FontAwesomeModule,
    NgxChartsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  faSearch = faSearch;
  faSpinner = faSpinner;
  
}
