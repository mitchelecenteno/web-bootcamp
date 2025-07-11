import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  input: any;
  toDoArr: (string | null)[] = ['run 5km', 'play pickleball', 'eat healthy'];

  ngOnInit() {
    this.toDo();
  }

  toDo() {
    let action = prompt('1. What would you like to do?');
    while (action !== 'quit') {
      console.log('loop');
      console.log(action);

      while (action === 'new') {
        console.log('Action:', action);
        let newToDo = prompt('Add new todo:');
        this.toDoArr.push(newToDo);
        console.log(`Added to the list: ${newToDo}`);
        console.log('Action:', action, 'Array: ', this.toDoArr);
        action = prompt('2. What would you like to do?');
      }

      if (action === 'list') {
        console.log('Action:', action);
        console.log('*********');
        for (let i = 0; i < this.toDoArr.length; i++) {
          let numArr = i + 1;
          console.log(`${numArr}: ${this.toDoArr[i]?.toUpperCase()}`);
        }
        console.log('*********');
      } else if (action === 'delete') {
        console.log('Action:', action);

        let inputNum = prompt('What number should I delete?');
        let parsedNum = parseInt(inputNum ?? '');
        console.log('ppppp', parsedNum);

        if (Number.isNaN(parsedNum)) {
          inputNum = prompt(
            'Invalid input. Please enter a valid number to delete:'
          ); //num to get out
          parsedNum = parseInt(inputNum ?? '');
          console.log('parseddd', parsedNum);
        } else {
          let arrIndex = parsedNum - 1;
          // console.log(parsedNum);
          // console.log(arrIndex);

          let deleted = this.toDoArr.splice(arrIndex, 1);
          console.log(
            `Deleted Number: ${arrIndex + 1}\nDeleted: ${deleted[0]}\n`
          );

          console.log('Array: after deletion', this.toDoArr);
        }
      } else if (action === 'quit') {
        console.log('1. quit the game');
        break;
      }

      if (action !== 'quit') {
        action = prompt('3. What would you like to do?');
      }
    }
    console.log('qqqqq');
    console.log(action);

    if (action === 'quit') {
      console.log('2. quit the game');
      alert('quit the game');
    }
  }
}
