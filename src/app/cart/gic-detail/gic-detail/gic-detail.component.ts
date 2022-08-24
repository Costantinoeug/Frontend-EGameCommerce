import { Game } from 'src/app/model/Game';
import { HttpCartService } from './../../../services/cartService/httpcart.service';
import { GameInCart } from './../../../model/GameInCart';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gic-detail',
  templateUrl: './gic-detail.component.html',
  styleUrls: ['./gic-detail.component.css']
})
export class GicDetailComponent implements OnInit {

  newQuantity:string="";
  @Input()
  gic!:GameInCart;
  @Output()
  refresh=new EventEmitter<boolean>();

  constructor(private httpCartService:HttpCartService) { }

  ngOnInit(): void {
  }

  updateQuantity(){
    if (this.newQuantity=='0')
      this.removeFromTheCart();
    else{
      this.httpCartService.updateQuantity(this.gic.id,this.newQuantity).subscribe(gic=>{
        this.refresh.emit(true);
      });
    }
  }

  removeFromTheCart(){
    this.httpCartService.removeFromTheCart(this.gic.id).subscribe(res=>{
      this.refresh.emit(true);
    });
  }


}
