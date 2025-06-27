import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPanelRoutingModule } from './pricing-panel-routing.module';
import { PricingPanelComponent } from './pricing-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: PricingPanelComponent,
  },
];

@NgModule({
  declarations: [PricingPanelComponent],
  imports: [
    CommonModule,
    PricingPanelRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
})
export class PricingPanelModule {}
