import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs'
import {data}  from '../../assets/salesflowData'

@Injectable({
  providedIn: 'root'
})
export class SalesflowService {
 
  constructor() { }

  getSalesflowData(): Observable<any>{
    return of(data);
  }
}
