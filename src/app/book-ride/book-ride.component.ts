import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RidedetailsComponent } from '../ridedetails/ridedetails.component';
import { RideServiceService } from './ride-service.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  flag:boolean=false;
  turn:number=0;
  public option:string="all";
  constructor(private rideService:RideServiceService) { }
  // rides:any[]=[
  //   {id:1,offerId:"A1",name:"Ride A",car:"101",seatsLeft:3,pickUp:"Vanrose Junction",destination:"Office"},
  //   {id:2,offerId:"A2",name:"Ride B",car:"102",seatsLeft:2,pickUp:"PTP",destination:"Office"},
  //   {id:3,offerId:"A3",name:"Ride C",car:"103",seatsLeft:7,pickUp:"Office",destination:"East-Fort"},
  //   {id:4,offerId:"A4",name:"Ride D",car:"104",seatsLeft:5,pickUp:"Office",destination:"Central Mall"}
  // ];
  onClickRides()
  {
    if(this.turn==0){
      this.flag=true;
      this.turn=1;
    }
    else{
      this.flag=false;
      this.turn=0;
    }
  }
  onReset()
  {
    this.isRideSelected=false;
    this.rideid="";
    this.rdComponent.booked=false;
  }
  filterPlace(choice:string)
  {
    if(choice==="toOffice") this.option="toOffice";
    else if(choice==="fromOffice") this.option="fromOffice";
    else if(choice==="Others") this.option="Others";
  }

  rideDetail:any;
  isRideSelected:boolean=false;
  RideSelect(aRide:any)
  {
      this.rideDetail=aRide;
      this.isRideSelected=true;
  }
  rideid!:string;
  bookRide(id:string)
  {
    this.rideid=id;
  }
  //cancelling the booking and setting booked to false to book again
  @ViewChild(RidedetailsComponent) rdComponent!:RidedetailsComponent;
  cancelRide()
  {
    this.rideid="";
    this.rdComponent.booked=false;
  }
  rides!:any[];
  err!:string;
  ngOnInit(): void {
    this.rideService.getRides().subscribe({next:(data)=>this.rides=data,error:(err)=>this.err=err});
  }
  
}
