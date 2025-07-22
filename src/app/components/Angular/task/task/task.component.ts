import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { MessageService } from 'src/app/services/message.service';
import { MatDialog } from '@angular/material/dialog';
import { FormTaskComponent } from './add-task/form-task/form-task.component';

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

  constructor(public dialog: MatDialog) {}

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
    this.addTask = true;

    const dialogRef = this.dialog.open(FormTaskComponent, {
      data: {
        addTask: this.addTask, // Pass addTask value to dialog
      },
      disableClose: true, // disable click and esc close of dialog
    });

    //Subscribe to dialog close event

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const newTask = {
          taskId: 't' + (this.tasksArr.length + 1),
          userId: this.userId ?? '',
          title: result.title,
          summary: result.summary,
          dueDate: result.dueDate,
        };
        this.tasksArr.push(newTask);
      }
      this.addTask = false;
    });
  }
}
