import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigate(val: any) {
    // if (val === 'calculator') {
    //   this.router.navigate(['/calculator']);
    // }

    switch (val) {
      case 'calculator':
        this.router.navigate(['/calculator']);
        break;
      case 'form':
        this.router.navigate(['/form']);
        break;
      case 'css':
        this.router.navigate(['/css']);
        break;
      case 'js':
        this.router.navigate(['/js']);
        break;
      case 'photo-blog':
        this.router.navigate(['/photo-blog']);
        break;
      case 'flex-box':
        this.router.navigate(['/flex-box']);
        break;
      default:
        this.router.navigate(['/dasboard']);
    }
  }
}
