import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/services/state/auth-state.service';
import { MessagesStateService } from 'src/app/services/state/messages-state.service';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css'],
})
export class MessagesPageComponent implements OnInit {
  constructor(
    public authState: AuthStateService,
    public messagesState: MessagesStateService
  ) {}

  ngOnInit() {
    this.messagesState.getInitialMessages();
  }

  public async login(): Promise<void> {
    await this.authState.login();
    this.messagesState.getInitialMessages();
  }

  public logout(): void {
    this.authState.logout();
  }
}
