import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuessingGameComponent } from './guessing-game.component';

const routes: Routes = [{ path: '', component: GuessingGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuessingGameRoutingModule { }
