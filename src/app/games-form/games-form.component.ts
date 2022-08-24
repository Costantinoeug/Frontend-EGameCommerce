import { Router } from '@angular/router';
import { Component, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchedGame } from 'src/app/model/SearchedGame';


@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})

export class GamesFormComponent  {
  model: SearchedGame={
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
  }
  @Output() searched=new EventEmitter<SearchedGame>();
  @Output() inserted=new EventEmitter<SearchedGame>();

  currentPath: string;
  constructor() {
    this.currentPath=window.location.pathname;
   }

  searchGame(){
    this.searched.emit(this.model);
  }
  sendGame(){
    this.inserted.emit(this.model);
  }
  resetUserForm(){
    this.model={
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
    };

  }
}
