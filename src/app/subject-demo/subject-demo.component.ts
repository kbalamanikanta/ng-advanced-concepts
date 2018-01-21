import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnInit {

  behaviorSubject = new BehaviorSubject<number>(10);

  subject = new Subject();

  constructor() { }

  ngOnInit() {
    this.behaviorSubject.next(10);
    this.behaviorSubject.next(20);

    this.behaviorSubject.subscribe(data => {
      console.log(data);
    })

    this.behaviorSubject.next(30);
    this.behaviorSubject.next(50);

    this.subject.next(100);

    this.subject.subscribe(data => {
      console.log(`subject data: ${data}`);
    })

    this.subject.next(200);
    this.subject.next(300);
  }

}
