import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDatetimeFormatComponent } from './ng-datetime-format/ng-datetime-format.component';

@NgModule({
  declarations: [
    AppComponent,
    NgDatetimeFormatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
