import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs'
import {data}  from '../../assets/salesflowData'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SalesflowService {
  // keyBind: any = {
  //   q: {
  //     salesflowId: null
  //     name:
  //   },
  //   w: {},
  //   e: {},
  //   r: {},
  // };



  constructor(private http: HttpClient) { }

  getSalesflowData(): Observable<any>{
    return of(data);
  }

  getSalesflows() {
    return this.http.get<any>('https://engage-app-staging.zoominfo.com/rest/v1/workflow_templates/dashboard');
  }
}
