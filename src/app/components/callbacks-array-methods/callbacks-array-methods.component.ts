import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callbacks-array-methods',
  templateUrl: './callbacks-array-methods.component.html',
  styleUrls: ['./callbacks-array-methods.component.scss'],
})
export class CallbacksArrayMethodsComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7];

  movies = [
    {
      title: 'Parasite',
      score: 90,
    },
    {
      title: 'Hulk',
      score: 80,
    },
    {
      title: 'Iron Man',
      score: 85,
    },
  ];

  text = ['cat', 'dog', 'mouse'];

  fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' },
  ];

  ngOnInit(): void {
    // this.arr.forEach((element) => [console.log(element)]);
    // this.arr.forEach(this.print);

    this.movies.forEach((movie) => {
      console.log(`${movie.title} - ${movie.score}/100`);
    });

    this.movies.forEach(this.printMovie);

    const mapArr = this.text.map((element) => {
      return element.toUpperCase();
    });

    const titles = this.movies.map((movie) => {
      return movie.title.toUpperCase();
    });

    console.log(mapArr); //new array bec of map
    console.log(this.text);
    console.log(titles);

    //* exercise
    const firstNames = this.fullNames.map((fullName) => {
      return fullName.first;
    });
    console.log(firstNames);
  }

  print(print: any) {
    console.log(print);
  }

  printMovie(movie: any) {
    console.log(`${movie.title} - ${movie.score}/100`);
  }
}
