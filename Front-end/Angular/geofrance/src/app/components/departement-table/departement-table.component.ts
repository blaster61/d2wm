import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Departement } from 'src/app/models/departement.model';

@Component({
  selector: 'app-departement-table',
  templateUrl: './departement-table.component.html',
  styleUrls: ['./departement-table.component.css']
})

export class DepartementTableComponent implements OnInit {
  faSearch = faSearchengin;
  faSpinner = faSpinner;

  @Input() departements: Departement[] = [];
  @Input() departementsIsLoading: boolean = false; 
  @Input() departementsIsLoaded: boolean = false;
  @Output() loadDepartements: EventEmitter<{}> = new EventEmitter();
  @Output() loadCommunes: EventEmitter<string> = new EventEmitter();

  currentPage: number = 1;
  search: string = "";

  ngOnInit(){

  }

  getLength(): number {
    return this.departements
        .filter(departement => departement.nom.toLowerCase().includes(this.search.toLowerCase()))
        .length;
}


getDepartements(): Departement[] {
    return this.departements
        .filter(departement => departement.nom.toLowerCase().includes(this.search.toLowerCase()))
        .slice((this.currentPage - 1) * 10, this.currentPage * 20)
}


}
