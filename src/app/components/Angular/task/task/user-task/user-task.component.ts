import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { type Task } from 'src/app/shared/interfaces/task.interface'; // "type" to be clear that this is a type

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss'],
})
export class UserTaskComponent implements OnInit {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    console.log(this.task.userId);
  }

  onCompleteTask() {
    //* use a service here instead of emitting an event and calling the service from that component
    // this.complete.emit(this.task.taskId);
    this.taskService.removeTask(this.task.taskId);
  }
}
