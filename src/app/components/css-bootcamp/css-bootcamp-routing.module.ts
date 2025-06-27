import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssBootcampComponent } from './css-bootcamp.component';

const routes: Routes = [{ path: '', component: CssBootcampComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssBootcampRoutingModule { }
