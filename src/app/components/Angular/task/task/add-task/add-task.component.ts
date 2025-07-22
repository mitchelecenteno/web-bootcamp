import { Component, Input } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  // @Input({required: true}) addTask!: Task
}
