import { NgModule } from '@angular/core';

// ✅ Import only the Angular Material modules you are actually using
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  // ❌ Nothing to declare here — it's a shared module

  // ✅ Import modules if needed internally (not always necessary here)
  imports: [],

  // ✅ Export so other modules (like CalculatorModule) can use them
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],

  declarations: [],
})
export class MaterialModule {}
