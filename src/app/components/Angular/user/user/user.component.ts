import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { User } from 'src/app/shared/interfaces/user.interface';

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

  /* 
  Service sample: Message service
  */

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string; //@Input - lets a parent component update/input data in the child component
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User; //@Input: object
  @Output() select = new EventEmitter<string>(); //@Output - lets a child component sends data to the parent component: custom event
  receivedTestMessage: string = '';
  @Input() isSelected!: boolean;

  constructor(private meesageService: MessageService) {}

  ngOnInit(): void {
    // subscribing/using service
    this.meesageService.message$.subscribe((msg) => {
      this.receivedTestMessage = msg;
      console.log(this.receivedTestMessage);
    });
  }

  // get imagePath() {
  //   return '../../../../../assets/angular/users/'
  // }

  onSlctUsr() {
    this.select.emit(this.user.userId); // 👈 Sends the id back to the parent
  }
}
