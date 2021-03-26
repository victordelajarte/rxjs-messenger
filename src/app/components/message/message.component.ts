import { Component } from '@angular/core';
import Message from 'src/app/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  message: Message;
  constructor() {}

  public get title() {
    return `Message sent at ${this.message.date.toLocaleDateString()}`;
  }
}
