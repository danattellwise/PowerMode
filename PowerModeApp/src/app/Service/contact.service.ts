import { Injectable } from '@angular/core';
import {Contacts} from "../Data/contact-mock-data";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContact(id: number): any {
      return Contacts.find(x => x.Id = id);
  }
}
