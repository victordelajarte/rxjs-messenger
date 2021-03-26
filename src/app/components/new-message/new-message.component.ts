import { Component } from '@angular/core';
import { MessagesStateService } from 'src/app/services/state/messages-state.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css'],
})
export class NewMessageComponent {
  public newMessageText = '';
  constructor(private messagesState: MessagesStateService) {}

  public sendMessage() {
    this.messagesState.sendMessage(this.newMessageText);
    this.newMessageText = '';
  }
}
