import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-practice',
  templateUrl: './events-practice.component.html',
  styleUrls: ['./events-practice.component.scss'],
})
export class EventsPracticeComponent implements OnInit {
  ngOnInit(): void {
    const btn2 = document.querySelector('#v2');
    const btn3 = document.querySelector('#v3');

    //! addEventListener
    btn3?.addEventListener('click', () => {
      console.log('V3 clicked');
    });
  }

  clicked() {
    alert('Clicked me');
  }
  dblClicked() {
    alert('Double Clicked me');
  }
}
