import { HttpBookingService } from './../services/bookService/httpbooking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/Booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings:Booking[]=[];
  totalCopies:number=0;
  totalPrice:number=0;
  constructor(private httpBookingService:HttpBookingService) { }

  ngOnInit(): void {
    this.httpBookingService.getBookingsByUser().subscribe(bookings=>{
      this.bookings=bookings;
      this.totalCopies=0;
      this.totalPrice=0;
      for(let b of this.bookings){
        this.totalPrice+=b.price*b.quantity;
        this.totalCopies+=b.quantity;
      }
    });
  }


  refresh( notuseful:boolean){
    this.ngOnInit();
  }

}
