import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.scss'],
})
export class LoopsComponent implements OnInit {
  airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco'],
  ];

  restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
  };

  animals = ['dog', 'cat', 'lion', 'tiger', 'elephant'];

  people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];

  cats = [
    ['Ace', 'Beha', 'Gingy'],
    ['Yukichi', 'Gingeruni', 'Pimpi'],
    ['Neeko', 'Cotton', 'Garfield'],
  ];

  ngOnInit(): void {
    //! LOOPS

    //* FOR LOOPS
    // for (let i = 1; i <= 20; i += 2) {
    //   console.log(i); //true; print this
    // }

    // for (let i = 100; i >= 0; i -= 10) {
    //   console.log(i);
    // }

    // for (let i = 10; i <= 1000; i *= 10) {
    //   console.log(i);
    // }
    // for (let i = 25; i >= 0; i -= 5) {
    //   console.log(i);
    // }

    // for (let i = 0; i < this.animals.length; i++) {
    //   console.log(i, this.animals[i]);
    // }

    // for (let i = this.animals.length - 1; i >= 0; i--) {
    //   console.log(i, this.animals[i]);
    // }

    // for (let i = 0; i < this.people.length; i++) {
    //   console.log(this.people[i].toUpperCase());
    // }

    //* NESTED FOR LOOPS
    // for (let i = 0; i < this.cats.length; i++) {
    //   // console.log(i, this.cats[i]);
    //   let row = this.cats[i];
    //   console.log(`Row: #${i + 1}`);

    //   for (let j = 0; j < row.length; j++) {
    //     console.log(j, row[j]);
    //   }
    // }

    //* WHILE LOOPS
    let count = 0;
    while (count < 10) {
      console.log(count);
      count++;
      break;
      console.log('continue'); // did not continue bec of break
    }
    
    
  }
  
}
