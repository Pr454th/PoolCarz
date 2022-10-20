import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Login } from './login/login';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title:string="angular";
  message!:string;//child to parent component
  isAuthenticated!:boolean;//!->to avoid initialization errors
  submitted=false;
  username!:string;
  password!:string;
  users:Login[]=[
    {username:"admin",password:"admin"},
    {username:"prasath",password:"1"},
    {username:"pradesh",password:"2"},
  ];
  onSubmit()
  {
    this.submitted=true;
    for(let i=0;i<this.users.length;i++)
    {
      if(this.username===this.users[i].username && this.password===this.users[i].password)
      {
        this.isAuthenticated=true;
        alert("Welcome "+this.username);
        this.password="";
      }
    }
    if(!this.isAuthenticated){
      alert("Invalid! Username or Password")
    }
  }
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
