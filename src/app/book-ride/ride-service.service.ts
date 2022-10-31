import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {

  constructor(private http:HttpClient) { }
  getRides():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/rides')
  }
  updateSeats(uride:any):Observable<any>{
    const options=new HttpHeaders({'content-type':'application/json'});
    console.log(uride);
    return this.http.put<any>(`http://localhost:3000/rides/${uride.id}`,uride,{headers:options}).pipe(tap(()=>console.log("updated")));
  }
}
