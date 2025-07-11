import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomPracticeRoutingModule } from './dom-practice-routing.module';
import { DomPracticeComponent } from './dom-practice.component';


@NgModule({
  declarations: [
    DomPracticeComponent
  ],
  imports: [
    CommonModule,
    DomPracticeRoutingModule
  ]
})
export class DomPracticeModule { }
