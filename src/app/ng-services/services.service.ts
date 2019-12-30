import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getServices(){
    console.log(this.http.get(this.baseUrl + '/services'))
    return this.http.get(this.baseUrl + '/services');
  }
}
