import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departement } from 'src/app/models/departement.model';
import { Commune } from 'src/app/models/commune.module';
import { ToastrService } from 'ngx-toastr'
import { filter } from 'd3';



@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent{

  departements: Departement[] = []; // j'initialise un tableau pour stocker les infos de l' API
  departementsIsLoading: boolean = false; // Définir le chargement des informations
  departementsIsLoaded: boolean = false;  // Si les départements sont chargées
  
  communes: Commune[] = [];
  communesForGraph: { name: string, value: number }[] = [];
  communesIsLoading: boolean = false;
  communesIsLoaded: boolean = false;



// Pour réaliser un GET, je dois déclarer en PRIVATE le service HttpClient dans le constructeur
 constructor(private httpClient: HttpClient, private toastr: ToastrService) { }
// Fonction qui permet le chargement des départements
  loadDepartements(): void{
    this.departementsIsLoading = true; // ça permet de gérer l'etat du spinner de chargement des données de la page
    this.toastr.success('Liste des départements chargés', 'Chargement OK')
    // Récupération des données de l'API grâce à une requete GET 
    this.httpClient.get<Departement[]>('https://geo.api.gouv.fr/departements').subscribe( // On doit souscrire aux information de l' API
      data => {
        this.departements = data;// Je tranfère les données de l'Api dans mon tableau vide
         // this.toastr.success('Liste des départements chargée', 'Chargement OK')
        this.departementsIsLoaded = true; // Le bouton de changement disparait
        this.departementsIsLoading = false; // Une fois les données chargées, le chargement passe à false
      }
    )
  }

  loadCommunes(codeDepartement: string): void{
    
      this.communesIsLoading = true;
      this.httpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`).subscribe(
        data => {
          this.toastr.success(`Liste des communes chargée`, 'Chargement terminé');
          this.communes = data;
          this.communesForGraph = data
          .filter(commune => commune.population > 5000)
          .map(commune =>{
            return {
              name: commune.nom,
              value: commune.population
            }
          })
          this.communesIsLoaded = true;
          this.communesIsLoading = false;
        }
      )
      

  }



}
