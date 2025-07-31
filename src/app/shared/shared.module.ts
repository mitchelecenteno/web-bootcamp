import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [CardComponent], // Components, directives, and pipes that belong to this module
  imports: [CommonModule, MaterialModule], // Modules to import and use within this module
  exports: [CardComponent, MaterialModule], // Components to make available to other modules
})
export class SharedModule {}
