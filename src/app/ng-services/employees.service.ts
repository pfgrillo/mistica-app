import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getEmployees(){
    console.log(this.http.get(this.baseUrl + '/employees'))
    return this.http.get(this.baseUrl + '/employees');
  }
}
