import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-box',
  templateUrl: './flex-box.component.html',
  styleUrls: ['./flex-box.component.scss'],
})
export class FlexBoxComponent implements OnInit {
  word = 'skateboard';
  ngOnInit() {
    let facialHair = this.word.slice(5).replace('o', 'e');

    console.log(facialHair);
  }
}
