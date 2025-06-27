import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaQueryRoutingModule } from './media-query-routing.module';
import { MediaQueryComponent } from './media-query.component';


@NgModule({
  declarations: [
    MediaQueryComponent
  ],
  imports: [
    CommonModule,
    MediaQueryRoutingModule
  ]
})
export class MediaQueryModule { }
