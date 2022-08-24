import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from 'src/app/model/purchase';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {
  newQuantity:string="";
  totalCopies:number=0;
  totalGames:number=0;

  @Input()
  purchase!:Purchase;
  constructor() { }

  ngOnInit(): void {
    for (let pg of this.purchase.pgs){
      this.totalCopies+=pg.quantity;
      this.totalGames++;
    }
  }

}
