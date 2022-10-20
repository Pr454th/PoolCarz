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

  @Output() bookSelectedRide=new EventEmitter<string>();
  bookRide(sRide:string)
  {
    this.bookSelectedRide.emit(sRide);
    this.booked=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
