import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent implements OnInit {
  airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco'],
  ];

  restaurant: any = {
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

  // YOUR CODE GOES BELOW THIS LINE:
  ngOnInit() {
    // console.log(this.airplaneSeats);

    // let fullAddress = `${this.restaurant['address']}, ${this.restaurant['city']}, ${this.restaurant['state']} ${this.restaurant['zipcode']} `;
    // console.log(fullAddress);

    //! LOOPS
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

    for (let i = 0; i < this.cats.length; i++) {
      // console.log(i, this.cats[i]);
      let row = this.cats[i];
      console.log(`Row: #${i + 1}`);

      for (let j = 0; j < row.length; j++) {
        console.log(j, row[j]);
      }
    }

    //! FOR OF LOOPS
    for (let animal of this.animals) {
      console.log(`Visit reddit.com/r/${animal}`);
    }

    for (let row of this.airplaneSeats) {
      console.log(row);
      for (let passenger of row) {
        console.log(passenger);
      }
    }

    //code exercise
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let number of numbers) {
      console.log((number *= number));
    }
    //! FOR IN

    for (let menu in this.restaurant) {
      console.log(`${menu}, ${this.restaurant[menu]} `);
    }

    //! Object.keys(), Object.values() and Object.entries()
    let objKeys = Object.keys(this.restaurant);
    console.log(objKeys);

    let objValue = Object.values(this.restaurant);
    console.log(objValue);

    let objEntries = Object.entries(this.restaurant);
    console.log(objEntries);

    // for (let obj of this.restaurant) {
    //   console.log(obj); //not iterable
    // }

    //*NOTE Iteraring Objects: Use for in or Object.keys(), Object.values() and Object.entries()
    //* Objects turn into Array to be Iterable
    for (let val of objValue) {
      console.log(val, 'Iterable'); // Object.values() turned the object into an array so its now iterable
    }

    for (let resVal of Object.values(this.restaurant)) {
      console.log(resVal);
    }

    let testScores: any = {
      ace: 90,
      beha: 80,
      gingy: 70,
      neemo: 90,
      pimpi: 80,
    };

    let total = 0;
    let scores = Object.values(testScores);
    let average = 0;

    for (let score of scores as number[]) {
      // console.log(score);
      // console.log(scores.length);
      total += score;
      average = total / scores.length;
    }
    console.log('Total', total);
    console.log('Average', average);
  }
}
