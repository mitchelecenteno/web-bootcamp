import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsBootcampComponent } from './js-bootcamp.component';

const routes: Routes = [{ path: '', component: JsBootcampComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsBootcampRoutingModule { }
