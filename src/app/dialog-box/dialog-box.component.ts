import { Component, OnInit } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material';
import { EmployeesModel } from '../models/employees';
import { EmployeesService } from '../ng-services/employees.service';
import { ServiceModel } from '../models/services';
import { ServicesService } from '../ng-services/services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  public employees: EmployeesModel[] = [];
  public prices: ServiceModel[] = [];

  // public employeesObservable: Observable<EmployeesModel[]> ; 
  constructor(private _employeeService: EmployeesService, private _serviceService: ServicesService) { 
    this._employeeService.getEmployees().subscribe((res : EmployeesModel[])=>{
      this.employees = res;
    });

    this._serviceService.getServices().subscribe((res : ServiceModel[])=>{
      console.log(res);
      this.prices = res;
    })
    // this._serviceService.getServices().subscribe((res: ServiceModel[]) => {
    //   console.log(res);
    //   this.prices = res;
    // });
  }

  public eventCheck(event: MatCheckboxChange, name: String) {
    const index = this.employees.findIndex(x => x.name === name);
    console.log(this.employees[index]);
    if (index === -1) {
        console.warn("Employee not found");  
        return;
    }
    console.log(event.checked)
    // this.employees[index].checked = changeEvent.checked;
  }
  ngOnInit() {

  }

}
