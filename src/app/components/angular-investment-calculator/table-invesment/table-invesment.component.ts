import { Component, Input } from '@angular/core';

interface InvestmentResult {
  year: number;
  totalValue: number;
  totalInvested: number;
  interestEarned: number;
}

// const ELEMENT_DATA: InvestmentResult[] = [
//   {
//     year: 1,
//     investmentValue: 1500,
//     interestYear: 200,
//     totalInterest: 2000,
//     investedCapital: 5000,
//   },
// ];

@Component({
  selector: 'app-table-invesment',
  templateUrl: './table-invesment.component.html',
  styleUrls: ['./table-invesment.component.scss'],
})
export class TableInvesmentComponent {
  displayedColumns: string[] = [
    'year',
    'totalValue',
    'totalInvested',
    'interestEarned',
  ];
  // Use @Input to receive investmentResults from parent component (investment-app)
  @Input() investmentResults: InvestmentResult[] = [];

  // Use investmentResults as the data source for the table
  get dataSource(): InvestmentResult[] {
    return this.investmentResults;
  }
}
