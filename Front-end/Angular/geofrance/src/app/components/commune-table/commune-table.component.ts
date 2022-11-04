import { Component, Input, EventEmitter, Output } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Commune } from 'src/app/models/commune.module';

@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})
export class CommuneTableComponent {

  faSpinner = faSpinner;
  // permet de gérer les entrées et sorties dans la balise HTML de commune.component.html
  @Input() communes: Commune[] = [];
  @Input() communesIsLoading: boolean = false;
  @Input() communesIsLoaded: boolean = false;

  currentPage: number = 1; // Pour la pagination, l'etat de la page actuel qui commence à 1
  search: string = ''; // L'input de la barre de recherche qu'on met à vide

   // Permet d'obtenir la longueur du tableau departements et de convertir en LowerCase les données
  // Pour faire fonctionner la barre de recherche
  getLength(): number {
      return this.communes
          .filter(commune => commune.nom.toLowerCase().includes(this.search.toLowerCase()))
          .length;
  }
  getPopulation(): Commune[] { // Pour créer un tableau de tri exemple (population, commune etc)
    return this.communes
    .sort((a, b) => {
    return a.population - b.population
  })
    .slice((this.currentPage - 1) * 10, this.currentPage * 10);
  }

  getCommunes(): Commune[] {
      return this.communes
          .filter(commune => commune.nom.toLowerCase().includes(this.search.toLowerCase()))
          .slice((this.currentPage - 1) * 10, this.currentPage * 10);
           
}}



