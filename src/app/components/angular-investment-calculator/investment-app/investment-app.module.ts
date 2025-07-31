import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentAppRoutingModule } from './investment-app-routing.module';
import { InvestmentAppComponent } from './investment-app.component';
import { HeaderInvesmentComponent } from '../header-invesment/header-invesment.component';
import { UserInputsModule } from '../user-inputs/user-inputs.module';
import { TableInvesmentModule } from '../table-invesment/table-invesment.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InvestmentAppComponent, HeaderInvesmentComponent],
  imports: [
    CommonModule,
    InvestmentAppRoutingModule,
    UserInputsModule,
    TableInvesmentModule,
    SharedModule,
  ],
})
export class InvestmentAppModule {}
