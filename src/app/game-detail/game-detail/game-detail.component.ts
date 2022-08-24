import { HttpCartService } from './../../services/cartService/httpcart.service';
import { HttpBookingService } from './../../services/bookService/httpbooking.service';
import { HTTPGameService } from './../../services/gameService/httpgame.service';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model/Game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  newQuantityUpdate:string="";
  newQuantityCart:string="";
  newPrice:string="";
  bookQuantity:string="";
  @Input()
  game!:Game;
  @Input()
  isLogged:boolean=false;
  @Input()
  roles:string[]=[];
  @Input()
  user:string="";
  @Input()
  parent:string="";

  constructor(private httpGameService:HTTPGameService, private httpBookingService:HttpBookingService, private httpCartService:HttpCartService) { }

  ngOnInit(): void {

  }

  updateQuantity(){
    this.httpGameService.updateQuantity(this.game.name,this.newQuantityUpdate).subscribe(game=> this.game=game)
    this.newQuantityUpdate="";
  }

  updatePrice(){
    this.httpGameService.updatePrice(this.game.name,this.newPrice).subscribe(game=> this.game=game);
    this.newPrice="";
  }

  bookGame(){
    this.httpBookingService.bookGame(this.game,this.bookQuantity).subscribe();
    this.bookQuantity="";
  }

  addToTheCart(){
    this.httpCartService.addToTheCart(this.game,this.newQuantityCart).subscribe();
    this.newQuantityCart="";
  }

  hideGame(){
    this.httpGameService.hideGame(this.game.name).subscribe(ris=>{
      this.game.hidden=ris;
    })
  }

  displayGame(){
    this.httpGameService.displayGame(this.game.name).subscribe(ris=>{
      this.game.hidden=!ris;
    })
  }
}
