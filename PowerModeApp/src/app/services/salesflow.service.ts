import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable, of } from 'rxjs'
import {data}  from '../../assets/salesflowData'

@Injectable({
  providedIn: 'root'
})
export class SalesflowService {
 
  constructor(private http:HttpClient) { }

  getSalesflowData(): Observable<any>{
    return of(data);
  }
}
