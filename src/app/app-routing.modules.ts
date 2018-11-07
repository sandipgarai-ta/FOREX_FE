import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileNotFoundComponent } from './_outer-pages/file-not-found/file-not-found.component';


const routes: Routes = [
    {
      path:'',
      loadChildren:'./pages/pages.module#PagesModule'
    },
    {
        path:'404',
        component:FileNotFoundComponent
    },
    {
      path:'**',
      redirectTo:'404',
      pathMatch:'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
  export class AppRoutingModule { }