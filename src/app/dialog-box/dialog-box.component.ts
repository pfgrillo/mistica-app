import { Component, OnInit, Inject } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  public services: ServiceModel[] = [];
  public total: Number = 0;
  public commission;
  public employeeName: String = "";
  // public employeesObservable: Observable<EmployeesModel[]> ; 
  constructor(private _employeeService: EmployeesService, private _serviceService: ServicesService, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this._employeeService.getEmployees().subscribe((res : EmployeesModel[])=>{
      this.employees = res;
    });

    this._serviceService.getServices().subscribe((res : ServiceModel[])=>{
      this.prices = res;
      this.services = res;
    })
  }
  
  public eventCheck(event: MatCheckboxChange, name: String) {
    const index = this.employees.findIndex(x => x.name === name);
    this.employeeName = this.employees[index].name;
    // this.commission =  this.employees[index].service;  //gives back the commission for given employee and service
    // console.log(this.commission);
    if (index === -1) {
        console.warn("Employee not found");  
        return;
    }
    // console.log(event.checked)
    // console.log(this.message);
    
    // this.employees[index].checked = changeEvent.checked;
  }

  onSave(name: String){
    const index = this.services.findIndex(x => x.name === name);
    console.log(this.services[index].name, this.services[index].price, this.employeeName);
    // const index = this.employees.findIndex(x => x.service === name);
    // console.log(this.employees[index]);
    // if (index === -1) {
    //     console.warn("Employee not found");  
    //     return;
    // }
    // console.log(event.checked)
    // // this.employees[index].checked = changeEvent.checked;
  }

  ngOnInit() {

  }

}
