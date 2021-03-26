import { Injectable } from '@angular/core';
import Message from '../../message.interface';

const dummyMessages: Message[] = [
  {
    date: new Date(2021, 3, 26, 12, 20),
    fromMe: false,
    text: "C'est un message que j'ai envoyé",
  },
];

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}
}
