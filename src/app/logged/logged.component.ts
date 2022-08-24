import { tap } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpAccountingService } from '../services/accountingService/httpaccounting.service';
import { HTTPGameService } from './../services/gameService/httpgame.service';
import { AuthService } from './../auth/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  private username:string;
  constructor(private authService:AuthService, private accountingService:HttpAccountingService, private router:Router, private location:Location) {
    this.username=this.authService.getUsername();

  }





  async ngOnInit() {

    await this.accountingService.registerUser(this.username);
    this.router.navigateByUrl('/Games');
  }



}
