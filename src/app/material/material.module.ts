import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatToolbarModule,
         MatSidenavModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatDialogModule,
         MatCheckboxModule,
         MatIconModule
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
  MatCheckboxModule,
  MatIconModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
