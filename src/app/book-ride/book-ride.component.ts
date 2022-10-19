import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  flag:boolean=false;
  turn:number=0;
  public option:string="all";
  constructor() { }
  rides:any[]=[
    {id:1,offerId:"A1",name:"Ride A",car:"101",seatsLeft:3,pickUp:"Vanrose Junction",destination:"Office"},
    {id:2,offerId:"A2",name:"Ride B",car:"102",seatsLeft:2,pickUp:"PTP",destination:"Office"},
    {id:3,offerId:"A3",name:"Ride C",car:"103",seatsLeft:7,pickUp:"Office",destination:"East-Fort"},
    {id:4,offerId:"A4",name:"Ride D",car:"104",seatsLeft:5,pickUp:"Office",destination:"Central Mall"}
  ];
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
  filterPlace(choice:string)
  {
    if(choice==="toOffice") this.option="toOffice";
    else if(choice==="fromOffice") this.option="fromOffice";
    else if(choice==="Others") this.option="Others";
  }

  ngOnInit(): void {
  }

}
