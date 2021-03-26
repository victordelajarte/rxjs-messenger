import { Component, Input } from '@angular/core';
import Message from 'src/app/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input() message: Message;
  @Input() username: string;

  constructor() {}

  public get title() {
    return `Message sent at ${this.message.date.toLocaleDateString()}`;
  }
}
