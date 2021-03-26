import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
