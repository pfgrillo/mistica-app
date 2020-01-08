import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ServiceModel } from '../models/services';
import { ComandasModel } from '../models/comandas';
import { ServicesService } from '../ng-services/services.service';
import { ComandasService } from '../ng-services/comandas.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css']
})

export class ComandasComponent implements OnInit {
  
  myDate: Date = new Date();
  public comanda: Number = 1;
  public services: ServiceModel[] = [];
  public comandas: ComandasModel[] = [];
  public comandaline: ComandasModel[] = [];
  public comandaStr: String;
  public comandaArr:any;

  constructor(private _servicesService: ServicesService,
              private _comandasService: ComandasService,  
              public dialog: MatDialog) {
    this._servicesService.getServices().subscribe((res : ServiceModel[])=>{
      this.services = res;
    })

    this._comandasService.getComandas().subscribe((res : ComandasModel[])=>{
      this.comandas = res;
    })

    this._comandasService.getComanda().subscribe((res : ComandasModel[])=>{
      this.comandaStr = JSON.stringify(res);
    })

    // this._comandasService.createComanda().subscribe((res : ComandasModel[])=>{
    //   this.comandaStr = JSON.stringify(res);
    // })
  }

  openDialog(name: String){
    const index = this.services.findIndex(x => x.name === name);
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {name: this.services[index].name}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      
      this._comandasService.getComandas().subscribe((res : ComandasModel[])=>{
        this.comandas = res;
      })// if(result){
      // this.comandas.push = result.data;
      // console.log(this.comandaStr)
      // console.log(result.data);
      // }
    });
  }

  // saveService(name: String){
  //   const index = this.services.findIndex(x => x.name === name);
  //   console.log(this.services[index].name);
  //   console.log(this.services[index].price);
  // }

  ngOnInit() {
  
  }

}
