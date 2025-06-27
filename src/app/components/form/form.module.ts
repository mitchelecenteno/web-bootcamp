import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FormComponent }, // '' means it responds to '/form'
];

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [FormComponent],
})
export class FormModule {}
