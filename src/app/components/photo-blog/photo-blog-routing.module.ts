import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoBlogComponent } from './photo-blog.component';

const routes: Routes = [{ path: '', component: PhotoBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoBlogRoutingModule { }
