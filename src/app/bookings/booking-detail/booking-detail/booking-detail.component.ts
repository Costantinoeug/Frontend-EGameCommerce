import { HttpBookingService } from './../../../services/bookService/httpbooking.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Booking } from 'src/app/model/Booking';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  newQuantity:string="";
  @Input()
  booking!:Booking;
  @Output()
  updated=new EventEmitter<boolean>();

  constructor(private httpBookingService:HttpBookingService) {
  }

  ngOnInit(): void {
  }

  unbook(){
    this.httpBookingService.unbookGame(this.booking.id).subscribe(ris=>{
      this.updated.emit(true);
    });
  }

  updateQuantity(){
    this.httpBookingService.updateQuantity(this.booking.id,this.newQuantity).subscribe(ris=>{
      this.booking=ris;
      this.updated.emit(true);
    });

  }
}
