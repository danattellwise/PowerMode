import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Contacts } from '../Data/contact-mock-data';
// import { PowerModeService } from '../Service/power-mode.service';

@Component({
  selector: 'app-power-mode',
  templateUrl: './power-mode.component.html',
  styleUrls: ['./power-mode.component.scss']
})
export class PowerModeComponent implements OnInit {
currentIndex = 0;
contacts = Contacts;
selectedContacts = Contacts;
selectedContact = this.selectedContacts[0];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    // private powerModeService: PowerModeService
    ) { }

  ngOnInit(): void {
    // this.powerModeService.getContactsByChips('companies', 'walmart', 1)
    //   .subscribe(res => {
    //     this.contacts = res.Contacts;
    //   });
  }

  ngAfterViewInit(): void {
    this.addHighlightClass(this.currentIndex);
  }
  updateContactDetails() {
    this.selectedContact = this.contacts[this.currentIndex];
  }

  addHighlightClass(i: any) {
    let elm = this.document.getElementById('cr' + i);
    elm?.classList.add('highlight');
    this.updateContactDetails();
  }

  removeHighlightClass(i: any) {
    let elm = this.document.getElementById('cr' + i);
    elm?.classList.remove('highlight');
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        this.removeHighlightClass(this.currentIndex);
        if (this.currentIndex >= this.contacts.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
        this.addHighlightClass(this.currentIndex);
        break;

      case 'ArrowUp':
        this.removeHighlightClass(this.currentIndex);
        if (this.currentIndex <= 0) {
          this.currentIndex = this.contacts.length - 1;
        } else {
          this.currentIndex--;
        }
        this.addHighlightClass(this.currentIndex);
        break;

      default:
        break;
    }
  }
}
