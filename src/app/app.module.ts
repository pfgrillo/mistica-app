import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { TurnosComponent } from './turnos/turnos.component';
import { StartComponent } from './start/start.component';
import { registerLocaleData } from '@angular/common';

import localeEsAr from '@angular/common/locales/es-AR';
import { ComandasComponent } from './comandas/comandas.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { HttpClientModule } from '@angular/common/http' 

import { EmployeesService } from './ng-services/employees.service';
import { ServicesService } from './ng-services/services.service';
import { ComandasService } from './ng-services/comandas.service';

registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    TurnosComponent,
    CalendarComponent,
    ComandasComponent,
    DialogBoxComponent,
    StartComponent
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-Ar' },
                 EmployeesService,
                 ServicesService,
                 ComandasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
