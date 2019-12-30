import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../models/services';
import { ServicesService } from '../ng-services/services.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  public service: ServiceModel[] = [];
  
  constructor(private _servicesService: ServicesService) { 
    this._servicesService.getServices().subscribe((res : ServiceModel[])=>{
      this.service = res;
    })
  }
  ngOnInit() {

  }

}
