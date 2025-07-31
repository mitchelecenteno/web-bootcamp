import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InvesmentService } from 'src/app/services/invesment-calculator/invesment.service';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.scss'],
})
export class UserInputsComponent implements OnInit {
  form!: FormGroup;
  @Output() dataEmitted = new EventEmitter<any>();

  constructor(private invesmentService: InvesmentService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      initial: new FormControl('', Validators.required),
      annual: new FormControl('', Validators.required),
      return: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });

    console.log(this.form.value);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form values:', this.form.value);

      // Access individual form control values
      const initialInvestment = this.form.get('initial')?.value;
      const annualContribution = this.form.get('annual')?.value;
      const expectedReturn = this.form.get('return')?.value;
      const duration = this.form.get('duration')?.value;

      // Convert string values to numbers
      const initial = Number(initialInvestment);
      const annual = Number(annualContribution);
      const returnRate = Number(expectedReturn);
      const years = Number(duration);

      // Use the enhanced service method
      const investmentResults = this.invesmentService.calculateInvestment(
        initial,
        annual,
        returnRate,
        years
      );
      console.log('Investment calculation results:', investmentResults);

      this.dataEmitted.emit(investmentResults);
      // You can emit this data to parent component or store it in a service

      // TEST
      // const sumTest = this.invesmentService.sum(
      //   initialInvestment,
      //   annualContribution
      // );

      // console.log(sumTest);
    }
  }

  onCancel() {
    this.form.reset();
  }
}
