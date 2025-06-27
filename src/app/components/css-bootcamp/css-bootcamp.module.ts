import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssBootcampRoutingModule } from './css-bootcamp-routing.module';
import { CssBootcampComponent } from './css-bootcamp.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [CssBootcampComponent],
  imports: [CommonModule, CssBootcampRoutingModule, MaterialModule],
})
export class CssBootcampModule {}
