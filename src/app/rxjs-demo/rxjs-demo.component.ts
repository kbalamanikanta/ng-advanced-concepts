import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  timeObserver: Observable<Date>;
  currentTime: Date;

  messageObserver: Observable<string>;
  currentMessage: string;
  messageCounter = 0;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
    'This is test',
  ];

  constructor() { }

  ngOnInit() {
    this.timeObserver = new Observable(obsrver => {
      setInterval(() => {
        // console.log('publishing data...');
        obsrver.next(new Date())
      }, 1000)
    });
    
    this.timeObserver.subscribe(data => {
      // console.log('received data...');
      this.currentTime = data;
      // console.log(`Data: ${data}`);
    })

    this.messageObserver = new Observable(obsrver => {
      setInterval(() => {
        console.log('publishing message...');
        obsrver.next(this.messages[this.messageCounter]);
        this.messageCounter++;
        if (this.messageCounter == 4) {
          this.messageCounter = 0;
        }
      }, 1000);
    });

    this.messageObserver.subscribe(data => {
      this.currentMessage = data;
      console.log(data);
    })
  }

}
