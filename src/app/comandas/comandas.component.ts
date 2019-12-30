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

  registered = false;
	submitted = false;
	comandasForm: FormGroup;
  
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(DialogBoxComponent);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("FFF");
    console.log(this.comandasForm.value);
  }
  

  ngOnInit() {
    this.comandasForm = this.fb.group({
      corte: this.fb.group({
        empleado: [''],
        precio: ['']
      }),
      color: this.fb.group({
        empleado: [''],
        precio: ['']
      }),
      manos: this.fb.group({
        empleado: [''],
        precio: ['']
      }),
      pies: this.fb.group({
        empleado: [''],
        precio: ['']
      }),
      depilacion: this.fb.group({
        empleado: [''],
        precio: ['']
      }),
      productos: this.fb.group({
        empleado: [''],
        precio: ['']
      })
    })
  }

}
