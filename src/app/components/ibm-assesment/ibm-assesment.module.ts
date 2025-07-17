import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IbmAssesmentRoutingModule } from './ibm-assesment-routing.module';
import { IbmAssesmentComponent } from './ibm-assesment.component';


@NgModule({
  declarations: [
    IbmAssesmentComponent
  ],
  imports: [
    CommonModule,
    IbmAssesmentRoutingModule
  ]
})
export class IbmAssesmentModule { }
