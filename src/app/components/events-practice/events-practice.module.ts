import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsPracticeRoutingModule } from './events-practice-routing.module';
import { EventsPracticeComponent } from './events-practice.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [EventsPracticeComponent],
  imports: [CommonModule, EventsPracticeRoutingModule, MaterialModule],
})
export class EventsPracticeModule {}
