import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../user/user/dummy-user';

@Component({
  selector: 'app-angular-app',
  templateUrl: './angular-app.component.html',
  styleUrls: ['./angular-app.component.scss'],
})
export class AngularAppComponent implements OnInit {
  users = DUMMY_USERS;
  selectedUserId: string = 'u1';

  ngOnInit(): void {}

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log('SELECTED ID: ' + id);
    this.selectedUserId = id;
  }
}
