import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { Observable } from 'rxjs';


const url = 'https://btoulemonde-collegues-api.herokuapp.com/collegues';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  rechercherMatriculeParNom(nom: string): Observable<string[]> {

    return this.httpClient.get<string[]>(url + '?nom=' + nom);

  }
}
