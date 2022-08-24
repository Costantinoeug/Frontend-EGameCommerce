import { AuthService } from './../../auth/service/auth.service';
import { SearchedGame } from './../../model/SearchedGame';
import { KeycloakService } from 'keycloak-angular';
import { Game } from 'src/app/model/Game';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class HTTPGameService {

  private gamesuri = "http://localhost:8070/games";
  constructor(private http: HttpClient, private authService:AuthService) { }


  public getGames(searchedGame:SearchedGame,isLogged:boolean):Observable<Game[]> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let isAdmin:boolean=false;
    if(isLogged && this.authService.getRoles().toString().includes('admin-role'))
      isAdmin=true;

    let params = new HttpParams();
    if (searchedGame.name!='') params=params.set('name', searchedGame.name)
    if (searchedGame.publisher!='') params=params.set('pub', searchedGame.publisher)
    if (searchedGame.developer!="") params=params.set('dev',searchedGame.developer)
    if (searchedGame.pegi!="") params=params .set('pegi', searchedGame.pegi)
    if (searchedGame.platform!="") params=params .set('platform', searchedGame.platform)
    if (searchedGame.genre!="") params=params .set('genre',searchedGame.genre)
    if (searchedGame.prezzoMin!="") params=params .set('priceMin', searchedGame.prezzoMin)
    if (searchedGame.prezzoMax!="") params=params.set('priceMax', searchedGame.prezzoMax);
    if (searchedGame.quantity!="") params=params.set('quantity', searchedGame.quantity);
                                   params=params.set('isAdmin', isAdmin);

    return this.http.get<Game[]>(this.gamesuri+'/show',{params: params,headers:headers});
  }

  public updateQuantity(name:string, quantity:string):Observable<Game> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let params = new HttpParams();
    params=params.set('name', name);
    params=params.set('quantity', quantity);

    return this.http.put<Game>(this.gamesuri+'/updatequantity',{} ,{params: params,headers:headers});
  }

  public hideGame(name:string):Observable<boolean> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let params = new HttpParams();
    params=params.set('name', name);

    return this.http.put<boolean>(this.gamesuri+'/hide',{} ,{params: params,headers:headers});
  }

  public displayGame(name:string):Observable<boolean> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let params = new HttpParams();
    params=params.set('name', name);

    return this.http.put<boolean>(this.gamesuri+'/display',{} ,{params: params,headers:headers});
  }

  public updatePrice(name:string, price:string):Observable<Game> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let params = new HttpParams();
    params=params.set('name', name);
    params=params.set('price', parseFloat(price))

    return this.http.put<Game>(this.gamesuri+'/updateprice',{} ,{params: params,headers:headers});
  }

  public insertGame(searchedGame:SearchedGame):Observable<Game> {

     let body={
      'name': searchedGame.name  ,
      'publisher': searchedGame.publisher,
      'developer':searchedGame.developer,
      'pegi':searchedGame.pegi,
      'platform':searchedGame.platform,
      'genre':searchedGame.genre,
      'description':searchedGame.description,
      'price':searchedGame.price,
      'quantity':searchedGame.quantity,
      'hidden':'false'
    };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Game>(this.gamesuri+'/add',body,{headers:headers});


  }



}
