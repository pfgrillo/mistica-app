import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css']
})
export class ComandasComponent implements OnInit {

  myDate: Date = new Date();

  comanda: Number = 1;

  constructor(public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(DialogBoxComponent);
  }

  ngOnInit() {
  
  }

}
