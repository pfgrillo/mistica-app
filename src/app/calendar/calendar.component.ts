import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  opened = false

  public dateSelected = "";

  valueChanged(value){
    this.dateSelected = value;
  }
  constructor() { }

  ngOnInit() {
  }

  
}
