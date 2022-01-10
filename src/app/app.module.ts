import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigMarianGameModule } from 'big-marian';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	  BrowserModule,
	  BigMarianGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
