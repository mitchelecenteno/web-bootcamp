import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IbmAssesmentComponent } from './ibm-assesment.component';

const routes: Routes = [{ path: '', component: IbmAssesmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IbmAssesmentRoutingModule { }
