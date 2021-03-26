import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Message from 'src/app/message.interface';
import { AuthStateService } from 'src/app/services/state/auth-state.service';
import { MessagesStateService } from 'src/app/services/state/messages-state.service';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css'],
})
export class MessagesPageComponent implements OnInit, OnDestroy {
  public user: { id: number; username: string };
  private subscription: Subscription;
  public messages$: Observable<Message[]>;

  constructor(
    private authState: AuthStateService,
    private messagesState: MessagesStateService
  ) {
    this.messages$ = this.messagesState.messages$;
  }

  ngOnInit() {
    this.subscription = this.authState.user$.subscribe((user) => {
      this.user = user;
      this.messagesState.getInitialMessages();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public async login(): Promise<void> {
    await this.authState.login();
  }

  public logout(): void {
    this.authState.logout();
  }
}
