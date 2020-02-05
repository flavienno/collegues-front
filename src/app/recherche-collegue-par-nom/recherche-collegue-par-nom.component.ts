import { Component, OnInit, Input } from '@angular/core';
import { matriculeMock } from '../mock/matricules.mock';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  @Input() matriculeMock: string [];
  //listeMatricule: string[];

  constructor() { }

  modeRechercher = false;


  rechercherParNom() {
    this.modeRechercher = true;
    console.log('recherche par nom ok');
  }
  ngOnInit() {
  }

}
