import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallbacksArrayMethodsRoutingModule } from './callbacks-array-methods-routing.module';
import { CallbacksArrayMethodsComponent } from './callbacks-array-methods.component';


@NgModule({
  declarations: [
    CallbacksArrayMethodsComponent
  ],
  imports: [
    CommonModule,
    CallbacksArrayMethodsRoutingModule
  ]
})
export class CallbacksArrayMethodsModule { }
