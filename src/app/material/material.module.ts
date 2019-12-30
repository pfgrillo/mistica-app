import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatToolbarModule,
         MatSidenavModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatDialogModule,
         MatCheckboxModule
        } from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatCheckboxModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
