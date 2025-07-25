import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CardComponent, MaterialModule],
})
export class SharedModule {}
