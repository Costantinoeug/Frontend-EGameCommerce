import { Booking } from '../../model/Booking';
import { AuthService } from '../../auth/service/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/model/Game';


@Injectable({
  providedIn: 'root'
})
export class HttpBookingService implements OnInit{

  bookings:Booking[]=[];
  private bookingsuri = "http://localhost:8070/bookings";
  private username:string="";
  private isLogged:boolean=false;
  constructor(private http:HttpClient,private authService:AuthService) {
  }








  async ngOnInit(): Promise<void> {
    this.isLogged=await this.authService.isLoggedIn();
    if (this.isLogged){
      this.username=  this.authService.getUsername();
     }
  }


















  public bookGame(game:Game,quantity:string):Observable<Booking> {

    this.username=this.authService.getUsername();
    let body={
      'id':'1',
      'name': game.name ,
      'date':'2012-04-30',
      'user':this.username,
      'price':game.price,
      'quantity':quantity,
    };

   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<Booking>(this.bookingsuri+'/book',body,{headers:headers});

 }

  public getBookingsByUser():Observable<Booking[]> {

    this.username=this.authService.getUsername();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('username', this.username);

    return this.http.get<Booking[]>(this.bookingsuri+'/byuser',{params: params,headers:headers})
  }


  public unbookGame(id:number):Observable<Booking> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('id', id);

    return this.http.delete<Booking>(this.bookingsuri+'/remove',{params: params,headers:headers})
  }


  public updateQuantity(id:number, quantity:string):Observable<Booking> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('id', id);
    params=params.set('quantity', quantity)

    return this.http.put<Booking>(this.bookingsuri+'/updatequantity',{} ,{params: params,headers:headers});
  }
}
