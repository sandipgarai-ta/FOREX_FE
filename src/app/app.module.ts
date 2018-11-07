import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './_outer-pages/file-not-found/file-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FileNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
