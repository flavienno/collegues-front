import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  creaCollegue: Collegue = new Collegue();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  creerCollegue() {
    this.dataService.ajouterCollegue(this.creaCollegue).subscribe();
  }
}
