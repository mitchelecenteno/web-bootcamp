import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-js-bootcamp',
  templateUrl: './js-bootcamp.component.html',
  styleUrls: ['./js-bootcamp.component.scss'],
})
export class JsBootcampComponent {
  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
