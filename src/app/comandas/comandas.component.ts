import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ServiceModel } from '../models/services';
import { ComandasModel } from '../models/comandas';
import { ServicesService } from '../ng-services/services.service';
import { ComandasService } from '../ng-services/comandas.service';
import { HttpClient } from '@angular/common/http';
import { MatIcon } from '@angular/material';

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
  public comanda_total: any = 0;
  public comandasNew: ComandasModel[] = [];

  constructor(private _servicesService: ServicesService,
              private _comandasService: ComandasService,
              private http: HttpClient,
              public dialog: MatDialog) {

    this._servicesService.getServices().subscribe((res : ServiceModel[])=>{
      this.services = res;
    })
    this._comandasService.getComanda().subscribe((res : ComandasModel[])=>{
      this.comandaStr = JSON.stringify(res);
    })
  }

  openDialog(name: String){
    const index = this.services.findIndex(x => x.name === name);
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {name: this.services[index].name}
    });
    
    dialogRef.afterClosed().subscribe(() => {
            this.http.get('/comandas').subscribe((res : ComandasModel[])=>{
          this.comandas = res;
        })

      this.comanda_total = 0;
      this.comandas.forEach(comanda => {
        if(comanda.service.price){
        this.comanda_total = this.comanda_total + comanda.service.price;
        console.log(comanda.service.price);
        }

        let list = document.getElementById('comandaList');
      });
    });
  }

  removeLine(event){
      let item_id = document.getElementById(event.target.parentElement.parentElement.id)
      let id_comanda = event.target.previousElementSibling.id;
      this.http.get('/comandas/'+ id_comanda + '/delete').subscribe((data:any) => {
      });
      item_id.parentNode.removeChild(item_id);
  }
  
  ngOnChanges(){

  }

  ngOnInit() {
    this._comandasService.getComandas().subscribe((res : ComandasModel[])=>{
      this.comandas = res;
    })
  }

}
