import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInputsComponent } from './user-inputs.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    UserInputsComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
    ReactiveFormsModule // ReactiveFormsModule: FormGroup, FormControl, and form validation.
  ],
  exports: [UserInputsComponent]
})
export class UserInputsModule { }
