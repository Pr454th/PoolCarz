import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
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
  constructor(private rideService:RideServiceService,
    private route:ActivatedRoute,
    private userLog:RestService) { }
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
  // rides:any[]=[
  //   {id:1,offerId:"A1",name:"Ride A",car:"101",seatsLeft:3,pickUp:"Vanrose Junction",destination:"Office"},
  //   {id:2,offerId:"A2",name:"Ride B",car:"102",seatsLeft:2,pickUp:"PTP",destination:"Office"},
  //   {id:3,offerId:"A3",name:"Ride C",car:"103",seatsLeft:7,pickUp:"Office",destination:"East-Fort"},
  //   {id:4,offerId:"A4",name:"Ride D",car:"104",seatsLeft:5,pickUp:"Office",destination:"Central Mall"}
  // ];
  
  rideDetail:any;
  isRideSelected:boolean=false;
  RideSelect(aRide:any)
  {
      console.log(aRide.name);
      if(aRide.seatsLeft>=1){
        this.rideDetail={id:aRide.id,name:aRide.name,offerId:aRide.offerId,car:aRide.car,seatsLeft:aRide.seatsLeft-1,pickUp:aRide.pickUp,destination:aRide.destination};
        this.isRideSelected=true;
        this.rideService.updateSeats({id:aRide.id,name:aRide.name,offerId:aRide.offerId,car:aRide.car,seatsLeft:aRide.seatsLeft-1,pickUp:aRide.pickUp,destination:aRide.destination}).subscribe({
          next:()=>this.rideService.getRides().subscribe({next:(data)=>this.rides=data,error:(err)=>this.err=err}),
          error:(err)=>console.log(err)
        });
    }
    else{
      alert("No seats available!");
    }
  }
  rideid!:string;
  bookRide(id:string)
  {
    this.rideid=id;
  }
  //cancelling the booking and setting booked to false to book again
  @ViewChild(RidedetailsComponent) rdComponent!:RidedetailsComponent;
  cancelRide(cRide:any)
  {
    this.rideid="";
    this.rideDetail={id:cRide.id,name:cRide.name,offerId:cRide.offerId,car:cRide.car,seatsLeft:cRide.seatsLeft+1,pickUp:cRide.pickUp,destination:cRide.destination};
    this.rideService.updateSeats({id:cRide.id,name:cRide.name,offerId:cRide.offerId,car:cRide.car,seatsLeft:cRide.seatsLeft+1,pickUp:cRide.pickUp,destination:cRide.destination}).subscribe({
      next:()=>this.rideService.getRides().subscribe({next:(data)=>this.rides=data,error:(err)=>this.err=err}),
      error:(err)=>console.log(err)
    });
    this.rdComponent.booked=false;
  }
  rides!:any[];
  err!:string;
  user!:string;
  ngOnInit(): void {
    // this.route.paramMap.subscribe((params)=>{
    //   this.user=params.get('user')??this.user
    // });
    this.user=this.userLog.getUser();
    this.rideService.getRides().subscribe({next:(data)=>{this.rides=data;console.log(data)},error:(err)=>this.err=err});
  } 
}
