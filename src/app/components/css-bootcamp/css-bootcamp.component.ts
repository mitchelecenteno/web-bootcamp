import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-bootcamp',
  templateUrl: './css-bootcamp.component.html',
  styleUrls: ['./css-bootcamp.component.scss'],
})
export class CssBootcampComponent {
  constructor(private router: Router) {}

  navigateToForm() {
    this.router.navigate(['/dashboard']);
  }
}
