import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTaskComponent } from './user-task/user-task.component';
import { TaskComponent } from './task.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [TaskComponent, UserTaskComponent, AddTaskComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TaskComponent], //need to export in order to use in other modules
})
export class TaskModule {}
