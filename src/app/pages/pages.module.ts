import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './_pages/home/home.component';
import { SearchResultComponent } from './_pages/search-result/search-result.component';
import { ApplicationSuccessComponent } from './_pages/application-success/application-success.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, HomeComponent, SearchResultComponent, ApplicationSuccessComponent]
})
export class PagesModule { }
