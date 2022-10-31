import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-ride-registration',
  templateUrl: './ride-registration.component.html',
  styleUrls: ['./ride-registration.component.css']
})

export class RideRegistrationComponent implements OnInit {

  registerForm!:FormGroup;
  submitted!:boolean;
  bcolor:string="white";
  constructor(private formBuilder:FormBuilder,private registerService:RegisterService) { }

  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      Name:['',Validators.required],
      startLocation:['',Validators.required],
      destination:['',Validators.required],
      car:[],
      seatsAvailable:[0,this.checkSeats]
    });
  }
  RidesAdded!:any[];
  add(){
    this.submitted=true;
    this.registerService.addRide({
      offerId:"HFF",
      name:this.registerForm.controls['Name'].value,
      car:this.registerForm.controls['car'].value,
      seatsLeft:this.registerForm.controls['seatsAvailable'].value,
      pickUp:this.registerForm.controls['startLocation'].value,
      destination:this.registerForm.controls['destination'].value
    }).subscribe();
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
