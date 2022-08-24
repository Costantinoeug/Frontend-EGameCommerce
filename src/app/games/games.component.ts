import { AuthService } from './../auth/service/auth.service';
import { HTTPGameService } from './../services/gameService/httpgame.service';
import { SearchedGame } from 'src/app/model/SearchedGame';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games:Game[]=[];

  isLogged:boolean=false;
  roles:string[]=[];
  user:string="";
  constructor(private HttpGameService:HTTPGameService, private authService:AuthService) {

  }

  async ngOnInit(): Promise<void> {
    await this.authOperations();

    this.searchGame({
      name:"",
      publisher:"",
      developer:"",
      pegi:"",
      platform:"",
      genre:"",
      price:"",
      quantity:"",
      prezzoMin:"",
      prezzoMax:"",
      description:""
    });

  }

  private async authOperations(){
    this.isLogged=await this.authService.isLoggedIn();
    if (this.isLogged){
      this.roles =  this.authService.getRoles();
      this.user=  this.authService.getUsername();
    }
  }

  public searchGame(searchedGame:SearchedGame){
    this.HttpGameService.getGames(searchedGame,this.isLogged).subscribe(games => {
      this.games = games;
    }
      )

  }



}
