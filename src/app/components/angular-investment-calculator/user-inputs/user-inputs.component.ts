import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss']
})
export class UserInputsComponent implements OnInit {
  form!: FormGroup;

  constructor(){

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      initial: new FormControl('', Validators.required),
      annual: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form values:', this.form.value);
      // Handle form submission logic here
    }
  }

  onCancel() {
    this.form.reset();
  }

}
