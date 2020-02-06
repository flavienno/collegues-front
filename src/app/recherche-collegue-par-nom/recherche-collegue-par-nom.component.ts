import { Component, OnInit, Input } from '@angular/core';
// import { matriculeMock } from '../mock/matricules.mock';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})


export class RechercheCollegueParNomComponent implements OnInit {

  // @Input() matriculeMock: string[];

  listeMatricules: Observable<string[]>;

  constructor(private dataService: DataService) { }

  modeRechercher = false;


  rechercherParNom(nom: string) {
    this.modeRechercher = true;
    this.listeMatricules = this.dataService.rechercherMatriculeParNom(nom);
  }

  ngOnInit() {

  }

}
