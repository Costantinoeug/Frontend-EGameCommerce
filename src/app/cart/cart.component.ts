
import { GameInCart } from './../model/GameInCart';
import { HttpCartService } from './../services/cartService/httpcart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  gics:GameInCart[]=[];
  totalCopies:number=0;
  totalPrice:number=0;
  checked:boolean=false;
  allGicsValid!:boolean;
  constructor(private httpCartService:HttpCartService) { }

  ngOnInit(): void {
    this.checked=false;
    this.operationsToDoOnRefresh();
  }

  operationsToDoOnRefresh(){
    this.httpCartService.getGicsByUserAfterRefresh().subscribe(gics=>{
      this.gics=gics;
      this.totalCopies=0;
      this.totalPrice=0;
      this.allGicsValid=true;
      for(let gic of this.gics){
        this.totalPrice+=gic.price*gic.quantityRequested;
        this.totalCopies+=gic.quantityRequested;
        if(!gic.valid)
          this.allGicsValid=false;
      }
    });
  }

  refresh(notuseful:boolean){
    this.checked=false;
    this.operationsToDoOnRefresh();
  }



  addPurchase(){
    this.httpCartService.addPurchase().subscribe(res=>{
      this.gics=res;
      this.refresh(true);
    })
  }

  emptyCart(){
    this.httpCartService.emptyCart().subscribe(ris=>{this.refresh(true)});
  }

}
