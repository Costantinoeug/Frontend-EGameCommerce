import { Purchase } from './../../model/purchase';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpPurchaseService {

  private purchasesuri = "http://localhost:8070/purchases";
  purchases: Purchase[]=[];
  private username:string="";

  constructor(private http: HttpClient, private authService:AuthService) { }

  public getPurchasesByUser():Observable<Purchase[]> {

    this.username=this.authService.getUsername();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params=params.set('username', this.username);

    return this.http.get<Purchase[]>(this.purchasesuri+'/byuser',{params: params,headers:headers})
  }



}
