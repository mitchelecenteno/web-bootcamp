import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTaskComponent } from './user-task/user-task.component';
import { TaskComponent } from './task.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormTaskComponent } from './form-task/form-task.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TaskComponent, UserTaskComponent, FormTaskComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, SharedModule],
  exports: [TaskComponent], //need to export in order to use in other modules
})
export class TaskModule {}
