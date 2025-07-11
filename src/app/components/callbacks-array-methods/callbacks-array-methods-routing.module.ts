import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbacksArrayMethodsComponent } from './callbacks-array-methods.component';

const routes: Routes = [{ path: '', component: CallbacksArrayMethodsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallbacksArrayMethodsRoutingModule { }
