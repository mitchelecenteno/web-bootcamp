import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsBootcampRoutingModule } from './js-bootcamp-routing.module';
import { JsBootcampComponent } from './js-bootcamp.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: JsBootcampComponent,
  },
];

@NgModule({
  declarations: [JsBootcampComponent],
  imports: [
    CommonModule,
    JsBootcampRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
})
export class JsBootcampModule {}
