import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessagesService } from '../api/messages.service';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root',
})
export class MessagesStateService {
  private messages = new BehaviorSubject([]);
  public messages$ = this.messages.asObservable();

  constructor(
    private messagesService: MessagesService,
    private authStateService: AuthStateService
  ) {}

  public getInitialMessages(): void {
    if (this.authStateService.isConnected) {
      this.messages.next([...this.messagesService.getMessagesFromAPI()]);
    }
  }
}
