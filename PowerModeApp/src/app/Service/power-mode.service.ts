import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PowerModeService {

  contacts: any[] = [];

  constructor() { }

  setContacts(selectedContacts: any[]) {
    this.contacts = selectedContacts;
  }

  getContacts(): any[] {
    return this.contacts;
  }
}
