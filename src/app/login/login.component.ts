import { AnimateTimings } from '@angular/animations';
import { Login } from './login';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTitle:string="Login";
  // twoWayBindtest:string="two way binding check";
  colorName="red";

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

  constructor() { }

  ngOnInit(): void {
  }

}
