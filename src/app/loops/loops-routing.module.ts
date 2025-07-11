import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoopsComponent } from './loops.component';

const routes: Routes = [{ path: '', component: LoopsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoopsRoutingModule { }
