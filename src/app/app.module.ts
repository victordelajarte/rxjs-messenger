import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

@NgModule({
  declarations: [AppComponent, MessageComponent, MessagesPageComponent, NewMessageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
