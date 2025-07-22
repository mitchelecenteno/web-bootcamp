import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
  providers: [DatePipe],
})
export class FormTaskComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<FormTaskComponent>,
    private datePipe: DatePipe // @Inject(MAT_DIALOG_DATA) public data: any //data from parent thru dialog data
  ) {}
  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
    });
  }

  onCancel(): void {
    // this.dataForm.emit(this.taskForm.value);
    this.dialogRef.close(); //close the dialog without data
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);

      const formValue = this.taskForm.value;
      const formattedDate = this.datePipe.transform(
        formValue.dueDate,
        'MMM d, y, h:mm a'
      );

      const taskData = {
        ...formValue,
        dueDate: formattedDate,
      };

      console.log(taskData);
      this.dialogRef.close(taskData);
    }
  }
}
