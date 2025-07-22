import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // NgFor ,NgIf ,etc.

import { AngularAppRoutingModule } from './angular-app-routing.module';
import { AngularAppComponent } from './angular-app.component';
import { HeaderComponent } from '../header/header/header.component';
import { UserComponent } from '../user/user/user.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { TaskModule } from '../task/task/task.module';

@NgModule({
  declarations: [
    AngularAppComponent,
    HeaderComponent,
    UserComponent,
  ],
  imports: [CommonModule, AngularAppRoutingModule, MaterialModule, TaskModule],
})
export class AngularAppModule {}
