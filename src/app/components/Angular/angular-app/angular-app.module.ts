import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // NgFor ,NgIf ,etc.
import { AngularAppRoutingModule } from './angular-app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskModule } from '../task/task/task.module';

import { AngularAppComponent } from './angular-app.component';
import { HeaderComponent } from '../header/header/header.component';
import { UserComponent } from '../user/user/user.component';

@NgModule({
  declarations: [AngularAppComponent, HeaderComponent, UserComponent],  // declare components, directives, and pipes that belong to this module
  imports: [CommonModule, AngularAppRoutingModule, SharedModule, TaskModule],  // required modules for this module's components
})
export class AngularAppModule {}
