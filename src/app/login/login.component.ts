import { AnimateTimings } from '@angular/animations';
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
  constructor() { }

  ngOnInit(): void {
  }

}
