import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.css']
})
export class RidedetailsComponent implements OnInit {
  selectedRide!:any;
  booked:boolean=false;
  @Input() set getRide(ride:string)
  {
    this.selectedRide=ride;
  }
  flag!:boolean;
  @Input() set invalidRide(flag:boolean)
  {
    this.flag=flag;
  }

  @Output() bookSelectedRide=new EventEmitter<string>();
  bookRide(sRide:string)
  {
    this.bookSelectedRide.emit(sRide);
    this.booked=true;
  }

  @Output() closeRide=new EventEmitter<boolean>();
  // back:boolean=false;
  backRide(){
    this.closeRide.emit(false);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
