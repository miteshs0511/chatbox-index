import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { from, interval, zip } from 'rxjs';
import { ChatBotService } from '../chat-bot.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  defaultQuesList: any[string] = [
    'Can I redeem my FB before the original term?',
    'How do I pay my Credit card bill?',
    'How can I get my Account Statement',
    'What is the tenure of Fixed Deposit?'
  ];
  asyncQuesList: any[string] = [];
  showStep1: boolean = false;
  showStep2: boolean = false;
  showStep4: boolean = false;
  showStep3: boolean = false;
  showStep5: boolean = false;
  showStep6: boolean = false;

  constructor(public chatBotService: ChatBotService,private changeDetector: ChangeDetectorRef) {
    this.chatBotService.showChatBot = true;
  }

  ngOnInit(): void {
    this.showStep1 = true;
    this.startStep1();
  }

  startStep1(){
    setTimeout(() => {
      this.startStep2();
      this.showStep2 = true;
    }, 3000);
  }

  startStep2(){
    setTimeout(() => {
      this.startStep3();
      this.showStep3 = true;
    }, 3000);
  }

  startStep3(){
    setTimeout(() => {
      this.showStep4 = true;
      this.startStep4();
    }, 3000);
  }

  startStep4(){
    setTimeout(() => {
      this.showStep5 = true;

      const obs = zip(
        from([
        'Can I redeem my FB before the original term?',
        'How do I pay my Credit card bill?',
        'How can I get my Account Statement',
        'What is the tenure of Fixed Deposit?']),
        interval(2000),
        (val, i) => val // Just emit the value
      )

      obs.subscribe(val => {
        // console.log(val);
        this.asyncQuesList.push(val);
      }).add(() => {
        //Called when operation is complete (both success and error)
        this.startStep5();
   });


    }, 1000);
  }

  startStep5(){
    setTimeout(() => {
      this.showStep6 = true;

    }, 2000);
  }

}
