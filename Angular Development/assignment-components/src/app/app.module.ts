import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlert } from './successalert/successalert.component';
import { WarningAlert } from './warning/warningalert.component';


@NgModule({
  declarations: [
    AppComponent, 
    SuccessAlert, 
    WarningAlert
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
