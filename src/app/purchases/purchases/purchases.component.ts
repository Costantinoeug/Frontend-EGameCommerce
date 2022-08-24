import { Purchase } from './../../model/purchase';
import { HttpPurchaseService } from './../../services/purchaseService/httppurchase.service';
import { Component, OnInit } from '@angular/core';
import { PurchasedGame } from 'src/app/model/purchasedGame';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases:Purchase[]=[];
  totalCopies:number=0;
  totalPrice:number=0;
  constructor(private httpPurchaseService:HttpPurchaseService) { }

  ngOnInit(): void {
    this.httpPurchaseService.getPurchasesByUser().subscribe(purchases=>{
      this.purchases=purchases;
      this.totalCopies=0;
      this.totalPrice=0;
      for(let p of this.purchases){
        for(let pg of p.pgs){
          this.totalPrice+=pg.price*pg.quantity;
          this.totalCopies+=pg.quantity;
        }
      }
    });
  }

}
