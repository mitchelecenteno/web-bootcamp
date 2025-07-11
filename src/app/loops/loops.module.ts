import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoopsRoutingModule } from './loops-routing.module';
import { LoopsComponent } from './loops.component';


@NgModule({
  declarations: [
    LoopsComponent
  ],
  imports: [
    CommonModule,
    LoopsRoutingModule
  ]
})
export class LoopsModule { }
