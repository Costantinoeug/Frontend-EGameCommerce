import { Router } from '@angular/router';
import { AuthService } from './auth/service/auth.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'EGC-Angular';
  isLogged: boolean=false;
  roles: string[]=[];
  user: string="";
  public activeComponent:string="Games";

  constructor(private authService:AuthService, private router:Router){
  }

  async ngOnInit(): Promise<void> {
    this.isLogged = await this.authService.isLoggedIn();
    if (this.isLogged) {
        this.roles = await this.authService.getRoles();
        this.user= await this.authService.getUsername();
    }

  }



  public login(){
    this.authService.login();
  }

  public logout(){
    this.authService.logout();
  }

  public handleNavigation(componentClicked:string){
    this.activeComponent=componentClicked;
    this.router.navigateByUrl('/'+componentClicked);
  }



}

