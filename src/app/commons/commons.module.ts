import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './_pages/header/header.component';
import { FooterComponent } from './_pages/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  
  declarations: [HeaderComponent, FooterComponent],
  exports:[HeaderComponent,FooterComponent]
  
})
export class CommonsModule { }
