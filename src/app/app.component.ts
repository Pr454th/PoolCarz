import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title:string="angular";
  message!:string;//child to parent component
  assignedCourse(x:string)
  {
    this.message=x;
  }
  //viewchild decorator
  @ViewChild(TimerComponent) timercomponent!:TimerComponent;
  startTimer()
  {
    this.timercomponent.begin();
  }
  endTimer()
  {
    this.timercomponent.end();
  }
  //view decorator to access data from app/parent component
  @ViewChild('ssn') ssn!:ElementRef;
  ngAfterViewInit()
  {
    this.ssn.nativeElement.style.color="red";
  }
  modify()
  {
    this.ssn.nativeElement.style.color="green";
  }
}
