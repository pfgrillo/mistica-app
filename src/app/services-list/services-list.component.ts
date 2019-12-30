import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../models/services';
import { ServicesService } from '../ng-services/services.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  public services: ServiceModel[] = [];
  
  constructor(private _servicesService: ServicesService, public dialog: MatDialog) { 
    this._servicesService.getServices().subscribe((res : ServiceModel[])=>{
      console.log(res);
      this.services = res;
    })
  }

  openDialog(){
    this.dialog.open(DialogBoxComponent);
  }
  
  ngOnInit() {

  }

}