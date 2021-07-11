import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatBotService } from './chat-bot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // showChatBot: boolean = false;

  constructor(public chatBotService: ChatBotService){


  }

  ngOnInit(){

  }

  chatClick(){
    this.chatBotService.showChatBot = true;
  }
}
