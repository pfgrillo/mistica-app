import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatCheckboxChange, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesModel } from '../models/employees';
import { EmployeesService } from '../ng-services/employees.service';
import { ServiceModel } from '../models/services';
import { ServicesService } from '../ng-services/services.service';
import { ComandasModel } from '../models/comandas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  public employees: EmployeesModel[] = [];
  public employeeName: String = "";
  public prices: ServiceModel[] = [];
  public services: ServiceModel[] = [];
  public comandas: ComandasModel[] = [];
  public command_line: any
  public commission;
  public total: Number = 0;
  public employeesObservable: Observable<EmployeesModel[]>; 

  constructor(private _employeeService: EmployeesService, 
              private _serviceService: ServicesService,
              @Optional()
              @Inject(MAT_DIALOG_DATA)
              public data: any,
              public dialogRef: MatDialogRef<DialogBoxComponent>,
              private http: HttpClient) { 
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
    if (index === -1) {
        console.warn("Employee not found");  
        return;
    }
  }

  onSave(name: String){
    const index = this.services.findIndex(x => x.name === name);
    this.command_line = {number: 2, service: {name: name, price: this.services[index].price}, employee: this.employeeName};
    if(this.command_line === false)
  	{
  		return;
  	}
  	else
  	{
  		let data: any = Object.assign(this.command_line);
  		this.http.post('/comandas', data).subscribe((data:any) => {
        });
    this.dialogRef.close({event:'close', data: this.command_line, comandasDialog: this.comandas});
    }
  }

  ngOnInit() {

  }

}
