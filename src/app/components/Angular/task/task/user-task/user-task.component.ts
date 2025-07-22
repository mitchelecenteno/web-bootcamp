import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { type Task } from 'src/app/shared/interfaces/task.interface'; // "type" to be clear that this is a type

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss'],
})
export class UserTaskComponent implements OnInit {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.task.userId);
  }

  onCompleteTask() {
    this.complete.emit(this.task.taskId);
  }
}
