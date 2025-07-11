import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPracticeComponent } from './events-practice.component';

const routes: Routes = [{ path: '', component: EventsPracticeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPracticeRoutingModule { }
