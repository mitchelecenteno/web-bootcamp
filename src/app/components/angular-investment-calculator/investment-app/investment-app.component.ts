import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-app',
  templateUrl: './investment-app.component.html',
  styleUrls: ['./investment-app.component.scss'],
})
export class InvestmentAppComponent implements OnInit {
  @Input() invesmentResults: any[] = [];

  ngOnInit(): void {}
  invesmentData: any[] = [];

  onDataReceived(data: any) {
    this.invesmentData = data;

    console.log(this.invesmentData);
  }
}
