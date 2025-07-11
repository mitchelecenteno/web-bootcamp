import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomPracticeComponent } from './dom-practice.component';

const routes: Routes = [{ path: '', component: DomPracticeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomPracticeRoutingModule { }
