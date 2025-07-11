import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guessing-game',
  templateUrl: './guessing-game.component.html',
  styleUrls: ['./guessing-game.component.scss'],
})
export class GuessingGameComponent implements OnInit {
  maximum!: any;
  input: any;
  randomNumber!: number;
  firstName!: string;

  ngOnInit(): void {
    const name = prompt('Enter your name*');
    this.firstName = name !== null ? name : ''; //for prompt null
    console.log(this.firstName);

    this.maximum = prompt('Enter maximum number to guess*');
    if (this.quitGame(this.maximum)) return;
    this.randomNumber = Math.floor(Math.random() * this.maximum) + 1;
    console.log(`generated number: ${this.randomNumber}`);

    this.input = prompt('Guess a number: ');
    this.guessNumber();
  }

  guessNumber() {
    let guess = this.input;
    let number = this.randomNumber;
    let attemps = 1;

    while (parseInt(guess) != number) {
      if (guess === 'q') break;
      guess = parseInt(guess);
      console.log(typeof guess);
      if (guess > number) {
        guess = prompt('high, guess again');
        attemps++;
      } else if (guess < number) {
        guess = prompt('low, guess again');
        attemps++;
      } else {
        guess = prompt('Invalid guess, press "q" to quit');
      }
    }

    if (guess === 'q') {
      this.quitGame(guess);
    } else {
      alert(
        `Congrats ${this.firstName.toUpperCase()} You Win!\nGuessed number: ${guess}\nGuess attemps: ${attemps}`
      );
    }
  }

  quitGame(input: any) {
    if (input.toLowerCase() === 'q') {
      alert('You quit this game!');
      return true;
    }
    return false;
  }
}
