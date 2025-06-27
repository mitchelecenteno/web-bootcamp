import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingPanelComponent } from './pricing-panel.component';

const routes: Routes = [{ path: '', component: PricingPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingPanelRoutingModule { }
