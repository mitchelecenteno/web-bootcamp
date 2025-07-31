import { Component, Input, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../user/user/dummy-user';

@Component({
  selector: 'app-angular-app',
  templateUrl: './angular-app.component.html',
  styleUrls: ['./angular-app.component.scss'],
})
export class AngularAppComponent implements OnInit {
  users = DUMMY_USERS;
  selectedUserId?: string;

  //! TEST @Input: parent to child data pass
  parentData = 'Data from parent!';
  parentDataTwo = 'second data from parent';
  parentDataThree = 'THIRDDDD!';
  inputOutputData =
    'pass me from parent to child and back to parent again, testtt';

  dataTest: string = '';

  ngOnInit(): void {}

  get selectedUser() {
    return this.users.find((user) => user.userId === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('SELECTED USER ID:', this.selectedUserId);
    console.log(this.selectedUser);
  }

  receivingData(data: any) {
    console.log('Output 1:', data);
  }

  receivingDataTwo(data: any) {
    console.log('Output 2:', data);
  }

  receivingDataThree(data: any) {
    console.log('Output 3:', data);
  }

  receivingOutputInput(data: any) {
    console.log('Input/Output:', data);
    this.dataTest = data;
  }
}
