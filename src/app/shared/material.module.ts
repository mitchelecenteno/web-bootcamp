import { NgModule } from '@angular/core';

// ✅ Import only the Angular Material modules you are actually using
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  // ❌ Nothing to declare here — it's a shared module

  // ✅ Import modules if needed internally (not always necessary here)
  imports: [],

  // ✅ Export so other modules (like CalculatorModule) can use them
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
})
export class MaterialModule {}
