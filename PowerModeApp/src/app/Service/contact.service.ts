import { Injectable } from '@angular/core';
import {Contacts} from "../Data/contact-mock-data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact(id: number): any {
      return Contacts.find(x => x.Id = id);
  }

  getContactsByChips(key: string, value: string,  pageNumber: number) {
    const chip = {
      Category: 'ContactFields',
      DisplayName: value,
      Entity:"Contact",
      IsNegation: false,
      Key: key,
      Type: 1,
      Value: value
    };

    const req = {
      Chips: [chip],
      Entity: 'Contact',
      PageNumber: pageNumber,
      PageSize: 25,
      Scope: 3,
      Search: '',
      SortBy: 'LastUpdated',
      SortOrder: 'Descending'
    };


    return this.http.post<any>('https://engage-app-staging.zoominfo.com/rest/v1/filters', req);
  }
}
