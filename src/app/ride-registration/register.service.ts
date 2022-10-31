import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  addRide(ride:any):Observable<any>{
    const options=new HttpHeaders({'content-type':'application/json'})
    console.log(ride);
    return this.http.post('http://localhost:3000/rides',ride,{headers:options}).pipe();
  }
}
