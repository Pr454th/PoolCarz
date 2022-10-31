import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {

  constructor(private http:HttpClient) { }
  getRides():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/rides')
  }
}
