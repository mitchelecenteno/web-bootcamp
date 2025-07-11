import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuessingGameRoutingModule } from './guessing-game-routing.module';
import { GuessingGameComponent } from './guessing-game.component';


@NgModule({
  declarations: [
    GuessingGameComponent
  ],
  imports: [
    CommonModule,
    GuessingGameRoutingModule
  ]
})
export class GuessingGameModule { }
