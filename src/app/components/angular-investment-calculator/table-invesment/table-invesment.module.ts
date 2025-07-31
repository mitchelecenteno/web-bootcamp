import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInvesmentComponent } from './table-invesment.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TableInvesmentComponent],
  imports: [CommonModule, SharedModule],
  exports: [TableInvesmentComponent],
})
export class TableInvesmentModule {}
