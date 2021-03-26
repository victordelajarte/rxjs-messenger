import { Injectable } from '@angular/core';
import Message from '../../message.interface';

const dummyMessages: Message[] = [
  {
    date: new Date(2021, 3, 26, 12, 20),
    username: 'Me',
    text: "C'est un message que j'ai envoyé",
  },
  {
    date: new Date(2021, 3, 26, 12, 10),
    username: 'You',
    text: "C'est un message que j'ai reçu",
  },
];

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  public getMessagesFromAPI(): Message[] {
    return [...dummyMessages];
  }

  public sendMessage(text: string, username: string): Promise<Message> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        text = text.trim();
        if (!text || !username) {
          return reject('Invalid parameters');
        }

        resolve({
          date: new Date(),
          username,
          text,
        });
      }, 200);
    });
  }
}
