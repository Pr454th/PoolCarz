import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ride-registration',
  templateUrl: './ride-registration.component.html',
  styleUrls: ['./ride-registration.component.css']
})

export class RideRegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  submitted!:boolean;
  bcolor:string="white";
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      Name:['',Validators.required],
      startLocation:['',Validators.required],
      destination:['',Validators.required],
      car:[],
      seatsAvailable:[0,this.checkSeats]
    });
  }
  checkSeats(n:FormControl):any
  {
    
    if(n.value<0 || n.value>8)
    {
      return {
        invalidSeats:{
          message:"seats must be between 0 and 8!"
      }
    }
    }
  }
}
