import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAppComponent } from './angular-app.component';

const routes: Routes = [{ path: '', component: AngularAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularAppRoutingModule { }
