import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoBlogRoutingModule } from './photo-blog-routing.module';
import { PhotoBlogComponent } from './photo-blog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PhotoBlogComponent,
  },
];

@NgModule({
  declarations: [PhotoBlogComponent],
  imports: [
    CommonModule,
    PhotoBlogRoutingModule,
    RouterModule.forChild(routes),
  ],
})
export class PhotoBlogModule {}
