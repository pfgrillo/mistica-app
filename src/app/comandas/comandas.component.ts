import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ServiceModel } from '../models/services';
import { ServicesService } from '../ng-services/services.service';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css']
})
export class ComandasComponent implements OnInit {

  myDate: Date = new Date();
  comanda: Number = 1;
  public services: ServiceModel[] = [];

  constructor(private _servicesService: ServicesService, public dialog: MatDialog) {
    this._servicesService.getServices().subscribe((res : ServiceModel[])=>{
      this.services = res;
    })
  }

  openDialog(name: String){
    const index = this.services.findIndex(x => x.name === name);
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {name: this.services[index].name}
    });
    // dialogRef.afterClosed().subscribe(() => {
    //   console.log(event);

    // });
  }

  saveService(name: String){
    const index = this.services.findIndex(x => x.name === name);
    console.log(this.services[index].name);
    console.log(this.services[index].price);
    // this.services.forEach(service => {
    //   console.log(service)
    // }); 
  }
  // dialogRef.afterClosed().subscribe(result => {
  //   this.selectedOption = result;
  // });

  ngOnInit() {
  
  }

}
