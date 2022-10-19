import { Component } from '@angular/core';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="angular";
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
}
