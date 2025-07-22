import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  testData = 'will travel to other component';
  addTask: boolean = false;
  @Input() name?: string;
  // @Input() name: string | undefined;
  @Input() userId?: string;

  ngOnInit(): void {}

  // clicked = selected user = to userId ? show task : ''
  tasksArr: Task[] = [
    {
      taskId: 't1',
      userId: 'u1',
      title: 'Code Practice',
      summary: 'learn udemy angular course',
      dueDate: '07-31-2025',
    },
    {
      taskId: 't2',
      userId: 'u3',
      title: 'Play Pickleball',
      summary: 'play pickleball in britanny court',
      dueDate: '07-18-2025',
    },
  ];

  //*Service
  // constructor(private messageService: MessageService) {}

  // sendToUser() {
  //   this.messageService.sendMessage(this.testData);
  // }

  get selectedUserTasks() {
    return this.tasksArr.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksArr = this.tasksArr.filter((task) => task.taskId !== id);
  }

  onAddTask() {
    const newTask: Task = {
      taskId: `t${Date.now()}`,
      userId: this.userId ?? '',
      title: 'New Task',
      summary: 'Task summary',
      dueDate: new Date().toISOString().slice(0, 10),
    };
    this.tasksArr.push(newTask);
  }
}
