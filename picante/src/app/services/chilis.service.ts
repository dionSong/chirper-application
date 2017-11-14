import { Injectable } from '@angular/core';
import { Http } from "@angular/http";



//rxjs
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Rx";


@Injectable()
export class ChilisService {
  static api: string = 'http://localhost:3000/api/chilis';

  constructor(private http: Http) { }

    getChilis(): Observable<any> {
      return this.http
        .get(ChilisService.api)
        .map(r => r.json());  
    }

    getChili(id: string): Observable<any> {
      return this.http
      .get(`${ChilisService.api}/${id}`)
      .map(r => r.json());  
    }
}
