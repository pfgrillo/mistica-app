import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComandasModel } from '../models/comandas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ComandasService {

  baseUrl = "http://localhost:3000";
  

  constructor(private http: HttpClient) { }

  getComandas(){
    //console.log(this.http.get(this.baseUrl + '/comandas'))
   return this.http.get(this.baseUrl + '/comandas');
  }

  getComanda(){
    //console.log(this.http.get(this.baseUrl + '/comandas/:number'))
    return this.http.get(this.baseUrl + '/comandas/1');
  }

  createComanda(newComanda: ComandasModel[]): Observable<ComandasModel>{
    return this.http.post<ComandasModel>(this.baseUrl + '/comandas', newComanda)
  }
}
