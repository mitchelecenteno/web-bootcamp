import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularAppRoutingModule } from './angular-app-routing.module';
import { AngularAppComponent } from './angular-app.component';
import { HeaderComponent } from '../header/header/header.component';
import { UserComponent } from '../user/user/user.component';
import { TaskComponent } from '../task/task/task.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    AngularAppComponent,
    HeaderComponent,
    UserComponent,
    TaskComponent,
  ],
  imports: [CommonModule, AngularAppRoutingModule,MaterialModule],
})
export class AngularAppModule {}
