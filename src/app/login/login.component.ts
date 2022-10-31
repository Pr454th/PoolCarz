import { AnimateTimings } from '@angular/animations';
import { Login } from './login';
import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from './user-service.service';

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
  // users:Login[]=[
  //   {username:"admin",password:"admin"},
  //   {username:"prasath",password:"1"},
  //   {username:"pradesh",password:"2"},
  // ];
  users!:any[];
  inVpassword!:string;
  noUser:boolean=true;
  onSubmit()
  {
    this.submitted=true;
    for(let i=0;i<this.users.length;i++)
    {
      if(this.username===this.users[i].username)
      {
        this.noUser=false;
        if(this.password===this.users[i].password)
        {
          this.isAuthenticated=true;
          alert("Welcome "+this.username);
          this.password="";
        }
        else{
          this.inVpassword="Invalid Credentials";
        }
      }
    }
    if(this.noUser==true)
    {
      this.inVpassword="Invalid Credentials";
    }
    if(!this.isAuthenticated){
      alert("Invalid! Username or Password")
    }
  }

  loginForm!:FormGroup;
  err!:string;
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService) { }

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      uname:['',Validators.required],
      pcode:['',Validators.required]
    });
    this.userService.getUsers().subscribe({
      next:(data)=>this.users=data,
      error:(err)=>this.err=err
    })
  }

}
