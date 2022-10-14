import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import {data}  from '../../assets/salesflowData'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SalesflowService {

  constructor(private http: HttpClient) { }

  getSalesflowData(): Observable<any>{
    return of(data);
  }

  getSalesflows() {
    return this.http.get<any>('https://engage-app-staging.zoominfo.com/rest/v1/workflow_templates/dashboard');
  }

  addToSalesflow(contacts: any, salesflowId: number) {
    console.log('call to add salesflow', salesflowId);
    const salesflowReq = {
      Contacts: contacts,
      IsOwnerAccordingToData: false,
      SenderId: 1075757593142466,
      StartedAt: null,
      WorkflowTemplateId: salesflowId
    };

    this.http.post<any>('https://engage-app-staging.zoominfo.com/rest/v1/workflows', salesflowReq)
      .subscribe((res) => {
        const response = res;
        console.log('Response is:::', response);
      });
  }
}
