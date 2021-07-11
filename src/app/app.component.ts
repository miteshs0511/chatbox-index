import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showChatBot: boolean = false;

  constructor(){


  }

  ngOnInit(){

  }

  chatClick(){
    this.showChatBot = true;
  }
}
