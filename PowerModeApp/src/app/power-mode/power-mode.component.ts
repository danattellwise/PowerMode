import { Component, OnInit } from '@angular/core';
import { Contacts } from '../Data/contact-mock-data';

@Component({
  selector: 'app-power-mode',
  templateUrl: './power-mode.component.html',
  styleUrls: ['./power-mode.component.scss']
})
export class PowerModeComponent implements OnInit {
contacts = Contacts;
selectedContact = Contacts[0];

  constructor() { }

  ngOnInit(): void {
  }

}
