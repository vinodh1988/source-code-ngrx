import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showMessage } from '../NgRx/messageactions';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  message:string="default message";
  inputMessage: string = '';

  constructor(private store: Store<{ messageData: { message: string } }>) {
    this.store.pipe(select(state => state.messageData.message))
    .subscribe(message => this.message = message);
  }

  displayMessage() {
   console.log("picking")
    let messages = ["Angular is Great","Angular is easy",
  "We have to put some great effor","Let me do it","So sad!!! This cant do this"]
  
      this.store.dispatch(showMessage({ message: messages[Math.floor(Math.random()*5)] }));
      
   
  }
}
