import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexBoxRoutingModule } from './flex-box-routing.module';
import { FlexBoxComponent } from './flex-box.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: FlexBoxComponent }];

@NgModule({
  declarations: [FlexBoxComponent],
  imports: [CommonModule, FlexBoxRoutingModule, RouterModule.forChild(routes)],
})
export class FlexBoxModule {}
