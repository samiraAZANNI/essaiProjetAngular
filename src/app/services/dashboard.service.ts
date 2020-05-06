import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _statistiqueUrl = "http://localhost:8080/statistiques/";
  
  constructor(private http : HttpClient) { }

  listStatistiques(){
    return this.http.get<any>(this._statistiqueUrl);
  }
}
