import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  
  openDialog(){
    this.dialog.open(DialogBoxComponent);
  }

  ngOnInit() {
  
  }

}
