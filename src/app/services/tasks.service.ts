import { Injectable } from '@angular/core';
import { Task } from '../shared/interfaces/task.interface';
import { FormTaskComponent } from '../components/Angular/task/task/form-task/form-task.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  // it can be injected in other components
  providedIn: 'root',
})
export class TasksService {
  addingTask: boolean = false;

  public tasksArr: Task[] = [
    {
      taskId: 't1',
      userId: 'u1',
      title: 'Code Practice',
      summary: 'learn udemy angular course',
      dueDate: '7/31/2025',
    },
    {
      taskId: 't2',
      userId: 'u3',
      title: 'Play Pickleball',
      summary: 'play pickleball in britanny court',
      dueDate: '7/18/2025',
    },
  ];

  constructor(public dialog: MatDialog) {
    const tasks = localStorage.getItem('tasks'); // get the save data from the local storage
    // console.log(typeof tasks);

    if (tasks) {
      this.tasksArr = JSON.parse(tasks);
      // console.log(typeof this.tasksArr);
    }
  }

  getUserTasks(userId: string) {
    return this.tasksArr.filter((task: Task) => task.userId === userId);
  }

  addTask(newTaskData: any) {
    const newTask: Task = {
      taskId: 't' + (this.tasksArr.length + 1),
      ...newTaskData,
    };
    this.tasksArr = [...this.tasksArr, newTask];
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasksArr = this.tasksArr.filter((task) => task.taskId !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasksArr)); // add data to local storage
    // console.log(typeof this.tasksArr);
  }
}
