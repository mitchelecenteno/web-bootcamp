import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaQueryComponent } from './media-query.component';

const routes: Routes = [{ path: '', component: MediaQueryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaQueryRoutingModule { }
