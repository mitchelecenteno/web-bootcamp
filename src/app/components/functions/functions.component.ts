import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie.interfaces';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
})
export class FunctionsComponent implements OnInit {
  usernames = ['cia', 'aceu', 'thunderboltpika', 'elcent', 'abcgsdfdfs'];
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  dogs = ['Mickey', 'Snoopy', 'Bond'];
  cats = ['Aceu', 'Gingy', 'Beha'];
  even = [2, 4, 6, 8, 10];
  movies = [
    {
      title: 'One Piece Red',
      score: 90,
      year: 2023,
      showing: true,
    },
    {
      title: 'Slam Dunk',
      score: 94,
      year: 2022,
      showing: false,
    },
    {
      title: 'Your Name',
      score: 96,
      year: 2014,
    },
    {
      title: 'Little Mermaid',
      score: 79,
      year: 2021,
    },
  ];

  catProfile = {
    name: 'Aceu',
    color: 'white',
  };

  dogProfile = {
    name: 'Mickey',
    color: 'brown',
  };

  runner = {
    name: 'Speedy',
    race: true,
    age: 45,
  };

  ngOnInit(): void {
    let dice1 = this.randomNumber(6);
    let dice2 = this.randomNumber(6);
    console.log(dice1, dice2);

    let greetAnya = this.greet('anya');
    console.log(greetAnya);

    this.rant('I hate beets');
    this.repeat('Hi', 3);

    this.isSnakeEyes(1, 1);
    this.isSnakeEyes(1, 5);
    this.isSnakeEyes(4, 5);

    let addNumber = this.add(1, 2);
    console.log('1:', addNumber);

    let twoAdd = this.add(this.add(1, 5), 5);
    console.log('2:', twoAdd);

    let a = this.lastElement([1, 2, 3, 4, 50]);
    let b = this.lastElement([]);
    console.log('a:', a);
    console.log('b:', b);

    let e1 = this.lastElement([3, 5, 7]);
    let e2 = this.lastElement([1]);
    let e3 = this.lastElement([]);

    console.log(e1);
    console.log(e2);
    console.log(e3);

    let hello = 'hi';

    try {
      throw new Error('Something went wrong!');
    } catch (error) {
      console.log(error);
    }
    console.log('after try catch');

    this.yell('HI!  ');
    this.yell(3);
    this.yell(true);
    this.yell([]);

    //! Arrow function
    const add = (x: number, y: number) => {
      return x + y;
    };

    const square = (side: number) => {
      return side * side;
    };

    const rollDice = (max: number) => {
      return Math.floor(Math.random() * max);
    };

    const rollDice2 = () => {
      return Math.floor(Math.random() * 6) + 1;
    };

    // console.log(add(1, 2));
    // console.log(square(2));
    // console.log(add(1, 2));
    console.log(rollDice(12));
    console.log(rollDice2());

    const greet = (name: string) => {
      return `Hey ${name}! `;
    };

    console.log(greet('Luna'));

    //! Implicit Return (arrow function) - for single expression return
    const add2 = (a: number, b: number) => a + b;
    console.log(add2(2, 3));

    //! Set timeout and Set intervals
    console.log('Hello!...');
    setTimeout(() => {
      console.log('Are you still there...');
    }, 3000);
    console.log('Goodbye...');

    const id = setInterval(() => {
      console.log(Math.floor(Math.random() * 6) + 1);
    }, 3000);
    // clearInterval(id); //stop interval

    console.log(id);

    //! Filter
    let odd = this.numbers.filter((num) => {
      return num % 2 === 1;
    });

    let greaterThanFive = this.numbers.filter((num) => {
      return num > 5;
    });

    let even = this.even.filter((num) => {
      return num % 2 === 1;
    });

    console.log(odd);
    console.log(greaterThanFive);
    console.log(even);

    let goodMovies = this.movies.filter((movie: Movie) => movie.score > 80);
    console.log(goodMovies);

    let goodTitles = this.movies
      .filter((movie: Movie) => movie.score > 80)
      .map((m) => m.title);
    console.log(goodTitles);

    let goodTitles2 = goodMovies.map((m) => m.title);
    console.log(goodTitles2);
    console.log(this.validUserNames(this.usernames));

    //! Some and Every

    let everyGoodMovies = this.movies.every((movie) => movie.score > 80);
    console.log(everyGoodMovies);

    let someGoodMovies = this.movies.some((movie) => movie.year > 2020);
    console.log(someGoodMovies);

    console.log(this.allEvens([2, 4, 6, 8]));
    console.log(this.allEvens([1, 4, 6, 8]));
    console.log(this.allEvens([1, 2, 3]));

    let total = this.numbers.reduce((acc, curr) => acc + curr);
    console.log(total);

    let totalMovieScore = this.movies.reduce(
      (acc, movie) => acc + movie.score,
      0
    );
    console.log(totalMovieScore);

    let minVal = this.numbers.reduce((min, curr) => Math.min(min, curr));
    console.log(minVal);
    let bestMovie = this.movies.reduce((bestMovie, curr) => {
      if (curr.score > bestMovie.score) {
        return curr;
      }
      return bestMovie;
    });

    let worstMovie = this.movies.reduce((worstMovie, curr) => {
      if (worstMovie.score < curr.score) {
        return worstMovie;
      }
      return curr;
    });

    console.log(bestMovie);
    console.log(worstMovie);

    console.log(this.multiplyNum(4));
    this.greetDef('EL', 'Heyyyyy', '!!!');

    //! Spread in Function calls
    let maxNumber = Math.max(...this.numbers);
    console.log(maxNumber);

    //! Spread in Array Literals
    let catDog = [...this.dogs, ...this.cats];
    console.log(catDog);

    //! Spread with Objects
    let animalObj = { ...this.dogProfile, ...this.catProfile, color: 'yellow' };
    console.log(animalObj);

    console.log(this.sum(1, 2, 4));
    console.log(this.abc(1, 2, 3, 4, 5));

    //! Destructuring from Arrays
    const [first, second, ...nums] = this.numbers;
    console.log(first);
    console.log(second);
    console.log(nums);

    //! Destructuring from Objects
    const { title, score, year, showing: nowShowing = true } = this.movies[2];
    console.log(title);
    console.log(score);
    console.log(year);
    console.log(nowShowing);

    const { score: rating } = this.movies[0];
    console.log(rating);

    //! Destructuring Parameters
    const printRace = ({ name, race }: { name: string; race: boolean }) => {
      console.log(`${name}, ${race}`);
    };
    printRace(this.runner);

    const goodMovieScore = this.movies.filter(({ score }) => score > 90);
    console.log(`good movie`, goodMovieScore);

    const goodMovieMap = this.movies.map(
      (movie) => `${movie.title}, ${movie.score}`
    );
    console.log(goodMovieMap);
    const goodMovieMap2 = this.movies.map(
      ({ title, score }) => `${title}, ${score}`
    );
    console.log('g2', goodMovieMap2);
  }

  //! Default Params
  greetDef(name: string, msg = 'Hey there', punc = '!') {
    console.log(`${msg} ${name}${punc}`);
  }

  multiplyNum(a: number, b = 1) {
    return a * b;
  }

  randomNumber(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  greet(name: string) {
    console.log(`Hi ${name}`);
    return name;
  }

  rant(message: string) {
    for (let i = 0; i < 3; i++) {
      console.log(message);
    }
  }

  repeat(message: string, count: number) {
    let result: string = '';
    for (let i = 0; i < count; i++) {
      // console.log(`${message}`);
      result += message;
    }
    console.log(result);
  }

  isSnakeEyes(num1: number, num2: number) {
    if (num1 === 1 && num2 === 1) {
      console.log('Snake Eyes!');
    } else {
      console.log('Not Snake Eyes!');
    }
  }

  add(num1: number, num2: number) {
    let total = num1 + num2;
    return total;
  }

  lastElement(arr: any) {
    if (arr.length === 0) {
      return null;
    }
    console.log(arr);
    let lastEl = arr[arr.length - 1];
    console.log(typeof lastEl);
    console.log(arr[4]);
    console.log(lastEl);
    return lastEl;
  }

  yell(msg: any) {
    try {
      console.log(msg.toUpperCase().repeat(3));
    } catch (error) {
      console.log(error);
      console.log('Pass a string');
    }
  }

  validUserNames(usernames: any) {
    let validUser = usernames.filter((username: any) => username.length < 10);
    return validUser;
  }

  allEvens(arr: Array<number>) {
    return arr.every((a) => a % 2 === 0);
  }

  //! Rest paramaters
  sum(...nums: any) {
    let a = nums.filter((n: any) => n < 3);
    return a;
  }

  abc = (...b: any) => {
    return b;
  };
}
