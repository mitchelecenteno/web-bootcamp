import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  /* 
  INPUT and OUTPUT Decorator: 
   a. INPUT - parent to child
   b. OUTPUT - child to parent
  */

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string; //@Input - lets a parent component update/input data in the child component
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: {id:string, name:string, avatar:string}
  @Output() select = new EventEmitter<string>(); //@Output - lets a child component sends data to the parent component: custom event

  ngOnInit(): void {}

  // get imagePath() {
  //   return '../../../../../assets/angular/users/'
  // }

  onSlctUsr() {
    this.select.emit(this.user.id); // 👈 Sends the id back to the parent
  }
}
