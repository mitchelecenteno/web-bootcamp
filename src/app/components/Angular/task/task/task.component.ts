import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { MessageService } from 'src/app/services/message.service'; //service
import { MatDialog } from '@angular/material/dialog';
import { FormTaskComponent } from './form-task/form-task.component';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  // private readonly messageForTesting = 'will travel to other component';
  isAddingTask: boolean = false;

  @Input() name?: string;
  @Input() userId?: string;

  //! TEST @Output Data: child to parent data pass
  @Output() testOutput = new EventEmitter(); // type default to any
  // @Output() testOutput = new EventEmitter<string>(); // type strict: string
  @Output() testOutputTwo = new EventEmitter();
  @Output() testOutputThree = new EventEmitter();
  @Output() outputInput = new EventEmitter();

  //! TEST @Input: parent to child data pass
  @Input() dataInputOne?: string;
  @Input() dataInputTwo?: string;
  @Input() dataInputThree?: string;
  @Input() inputOutput?: string;

  //! property binding
  propBind: string = 'test property binding...';
  nameProp: string = 'Mitchele';

  ngOnInit(): void {}

  constructor(public dialog: MatDialog, private taskService: TasksService) {}

  get selectedUserTasks(): Task[] {
    return this.taskService.getUserTasks(this.userId || '');
  }

  // onCompleteTask(taskId: string): void {
  //   this.taskService.removeTask(taskId);
  // }

  onAddTask(): void {
    this.isAddingTask = true;

    const addTaskDialogRef = this.dialog.open(FormTaskComponent, {
      //* pass a data in a dialog
      // data: {
      //   isAddingTask: this.isAddingTask,
      // },
      disableClose: true,
    });

    //after the dialog closed, data is added to the array
    addTaskDialogRef.afterClosed().subscribe((formResult: any) => {
      if (formResult) {
        const newTaskData = {
          userId: this.userId ?? '',
          title: formResult.title,
          summary: formResult.summary,
          dueDate: formResult.dueDate,
        };
        this.taskService.addTask(newTaskData);
      }
      this.isAddingTask = false;
    });
  }

  //!Test @Output Data
  testMethodOutput(data: any) {
    // Other event
    // console.log(event.target); // The button element
    // console.log(event.type); // "click"
    // console.log(event.clientX); // Mouse X position

    // console.log(data);
    this.testOutput.emit(data);
  }

  testMethodOutputTwo(data: any) {
    // console.log(data);
    this.testOutputTwo.emit(data);
  }

  testMethodOutputThree(data: any) {
    this.testOutputThree.emit(data);
  }

  outputInputMethod(data: any) {
    this.outputInput.emit(data);
  }
}
