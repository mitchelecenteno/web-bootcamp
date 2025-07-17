import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ibm-assesment',
  templateUrl: './ibm-assesment.component.html',
  styleUrls: ['./ibm-assesment.component.scss'],
})
export class IbmAssesmentComponent implements OnInit {
  itemArr = ['ball', 'shoes', 'ball', 'shirt', 'pants'];

  ngOnInit() {
    this.getLatestKRequests(this.itemArr, 5);
  }

  getLatestKRequests(requests: string[], k: number) {
    const seen = new Set<string>(); 
    const result: string[] = []; 

    for (let i = requests.length - 1; i >= 0; i--) {
      const req = requests[i];

      if (!seen.has(req)) {
        seen.add(req); 
        result.push(req); 
      }

      if (result.length === k) {
        break;
      }
    }

    console.log(result); 
    return result; 
  }
}
