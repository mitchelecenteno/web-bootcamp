import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvesmentService {
  constructor() {}

  sum(a: number, b: number) {
    return a + b;
  }

  calculateInvestment(
    initial: number,
    annual: number,
    returnRate: number,
    duration: number
  ) {
    // Simple compound interest calculation
    let totalValue = initial;
    const results = [];

    for (let year = 1; year <= duration; year++) {
      totalValue = (totalValue + annual) * (1 + returnRate / 100);
      results.push({
        year,
        totalValue: Math.round(totalValue * 100) / 100,
        totalInvested: initial + annual * year,
        interestEarned:
          Math.round((totalValue - initial - annual * year) * 100) / 100,
      });
    }

    return results;
  }
}
