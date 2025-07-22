import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes it available app-wide
})
export class MessageService {

  private messageSource = new Subject<string>;


  // Observable stream other components can subscribe to
  message$ = this.messageSource.asObservable()

  // Method to send a message
  sendMessage(msg:string){
    this.messageSource.next(msg)
  }
}
