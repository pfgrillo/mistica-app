import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material';
import { EmployeesModel } from '../models/employees';
import { EmployeesService } from '../ng-services/employees.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  public employees: EmployeesModel[] = [];
  
  // public employeesObservable: Observable<EmployeesModel[]> ; 

  //employees: EmployeesModel = new EmployeesModel([{name: "Employee Name"},{name:"Susana"} ]);
  constructor(private _employeeService: EmployeesService) { 
    this._employeeService.getEmployees().subscribe((res : EmployeesModel[])=>{
      console.log(res);
      this.employees = res;
    })
  }
  // public checkbox: MatCheckbox
  ngOnInit() {
    //this.employees = this._employeeService.getEmployees();
  }

}
