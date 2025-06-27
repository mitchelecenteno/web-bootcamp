import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  // styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  firstValue: string = '';
  secondValue: string = '';
  operator: string = '';
  display: string = '';
  operand: string[] = ['+', '-', '*', '/'];

  constructor(private router: Router) {}

  numClick(val: string) {
    const isOperator = this.operand.includes(val);

    if (!isOperator) {
      if (!this.operator) {
        this.firstValue += val;
        this.display = this.firstValue;
      } else {
        this.secondValue += val;
        this.display = this.secondValue;
      }
      return;
    }
    if (this.firstValue && !this.secondValue) {
      this.operator = val;
    }
  }

  calculate() {
    const num1 = parseFloat(this.firstValue);
    const num2 = parseFloat(this.secondValue);

    if (!this.operator || isNaN(num1) || isNaN(num2)) {
      return; // Invalid state — ignore
    }

    let result: number;

    switch (this.operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : NaN;
        break;
      default:
        return;
    }

    this.display = result.toString();
    this.firstValue = result.toString();
    this.secondValue = '';
    this.operator = '';
  }

  clear() {
    this.firstValue = '';
    this.secondValue = '';
    this.operator = '';
    this.display = '0';
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
