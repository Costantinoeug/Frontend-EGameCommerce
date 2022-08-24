import { Observable } from 'rxjs';
import { AuthService } from './../../auth/service/auth.service';
import { GameInCart } from './../../model/GameInCart';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Game } from 'src/app/model/Game';

@Injectable({
  providedIn: 'root'
})
export class HttpCartService implements OnInit {

  private isLogged:boolean=false;
  private carturi= "http://localhost:8070/cart";
  private username:string="";
  constructor(private http:HttpClient, private authService:AuthService) {
  }
  async ngOnInit(): Promise<void> {
    this.isLogged=await this.authService.isLoggedIn();
    if (this.isLogged){
      this.username=  this.authService.getUsername();
     }
  }

  public addToTheCart(game:Game, quantity:string):Observable<GameInCart> {

    let body={
     'id':'1',
     'gameName': game.name  ,
     'username': this.authService.getUsername(),
     'price':game.price,
     'quantityRequested':quantity,
     'quantityAvailable':game.quantity,
     'valid':'false'
   };
   console.log(body);
   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<GameInCart>(this.carturi+'/add',body,{headers:headers});
 }

  public addPurchase():Observable<GameInCart[]> {

    let params = new HttpParams();
    params=params.set('username', this.username);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<GameInCart[]>(this.carturi+'/addpurchase',{},{headers:headers,params:params});
  }


  public removeFromTheCart(id:number):Observable<number> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('id', id);

    return this.http.delete<number>(this.carturi+'/remove',{params: params,headers:headers})
  }


  public getGicsByUser():Observable< GameInCart[]>{

    this.username=this.authService.getUsername();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('username', this.username);

    return this.http.get<GameInCart[]>(this.carturi,{params: params,headers:headers})
  }

  public getGicsByUserAfterRefresh():Observable< GameInCart[]>{

    this.username=this.authService.getUsername();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('username', this.username);

    console.log('lalal')
    return this.http.get<GameInCart[]>(this.carturi+'/refresh',{params: params,headers:headers})
  }


  public updateQuantity(id:number, quantity:string):Observable<GameInCart> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('id', id);
    params=params.set('quantity', quantity)

    return this.http.put<GameInCart>(this.carturi+'/updatequantity',{} ,{params: params,headers:headers});
  }

  public emptyCart():Observable<GameInCart[]> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('username', this.authService.getUsername());

    return this.http.delete<GameInCart[]>(this.carturi+'/empty',{params: params,headers:headers})
  }
}

