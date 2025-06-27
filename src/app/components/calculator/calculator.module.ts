import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf, *ngFor, etc.
import { CalculatorComponent } from './calculator.component';
import { MaterialModule } from '../../shared/material.module'; // ✅ Reuse Angular Material components
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CalculatorComponent }];

@NgModule({
  // ✅ Declare all components, directives, and pipes defined in this feature module
  declarations: [CalculatorComponent],

  // ✅ Import necessary modules
  imports: [
    CommonModule, // ✅ Basic Angular directives like *ngIf, *ngFor
    MaterialModule, // ✅ Shared Angular Material components
    RouterModule.forChild(routes),
  ],

  // ✅ Export any component that needs to be used in another module (like AppModule)
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
