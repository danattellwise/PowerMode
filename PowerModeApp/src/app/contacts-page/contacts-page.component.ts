import { Component, OnInit } from '@angular/core';
import { Contacts } from '../Data/contact-mock-data';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  contacts = Contacts;
  constructor() { }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev: any) {
    this.contacts.forEach(c => c.checked = ev.target.checked);
  }

  isAllCheckBoxChecked() {
    return this.contacts.every(c => c.checked);
  }

}
