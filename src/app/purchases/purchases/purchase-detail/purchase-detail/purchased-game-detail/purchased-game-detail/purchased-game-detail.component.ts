import { PurchasedGame } from './../../../../../../model/purchasedGame';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchased-game-detail',
  templateUrl: './purchased-game-detail.component.html',
  styleUrls: ['./purchased-game-detail.component.css']
})
export class PurchasedGameDetailComponent implements OnInit {

  @Input()
  pg!:PurchasedGame;
  constructor() { }

  ngOnInit(): void {
  }

}
