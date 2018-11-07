import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './_pages/home/home.component';
import { SearchResultComponent } from './_pages/search-result/search-result.component';
import { ApplicationSuccessComponent } from './_pages/application-success/application-success.component';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'search-result',
        component: SearchResultComponent
      },
      {
        path:'application-success',
        component: ApplicationSuccessComponent
      },
      {
        path:'**',
        redirectTo: '404',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
