import { Component } from '@angular/core';

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
  onSubmit(name:string,password:string)
  {
    this.submitted=true;
    this.username=name;
    if(name==="admin" && password==="admin")
    {
      this.isAuthenticated=true;
    }
    else{
      this.isAuthenticated=false;
    }
  }
}
