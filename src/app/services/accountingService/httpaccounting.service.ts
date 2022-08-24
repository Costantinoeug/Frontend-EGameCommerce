import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAccountingService {

  private useruri = "http://localhost:8070/users";

  constructor(private http:HttpClient) {}

  public registerUser(username:string) {


   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<boolean>(this.useruri+'/create',username,{headers:headers}).toPromise();
 }
}
