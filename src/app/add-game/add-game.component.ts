
import { HTTPGameService } from './../services/gameService/httpgame.service';
import { Component, OnInit } from '@angular/core';
import { SearchedGame } from '../model/SearchedGame';
import { Game } from '../model/Game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  games:Game[]=[];

  constructor(private httpGameService:HTTPGameService) { }


  ngOnInit(): void {
  }



  public  insertGame(searchedGame:SearchedGame){
    this.httpGameService.insertGame(searchedGame).subscribe(game => {
        this.games.push(game);
    });

  }
}
