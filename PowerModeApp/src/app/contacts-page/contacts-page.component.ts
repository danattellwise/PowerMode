import {AfterViewInit, Component, HostListener, Inject, OnInit} from '@angular/core';
import { Contacts } from '../Data/contact-mock-data';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit, AfterViewInit {
  currentIndex = 0;
  contacts = Contacts;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // this.addHighlightClassOnLoad();
  }

  ngAfterViewInit(): void {
    this.addHighlightClass(this.currentIndex);
  }

  checkAllCheckBox(ev: any) {
    this.contacts.forEach(c => c.checked = ev.target.checked);
  }

  isAllCheckBoxChecked() {
    return this.contacts.every(c => c.checked);
  }


  addHighlightClass(i: any) {
    let elm = this.document.getElementById('cr' + i);
    elm?.classList.add('highlight');
  }

  removeHighlightClass(i: any) {
    let elm = this.document.getElementById('cr' + i);
    elm?.classList.remove('highlight');
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'a':
        if (event.ctrlKey == true) {
          const allAreSelected = this.contacts.every(c => c.checked == true);

          if (allAreSelected) {
            this.contacts.forEach(c => c.checked = false);
          } else {
            this.contacts.forEach(c => c.checked = true);
          }
        }
        break;

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

      case ' ':
        this.contacts[this.currentIndex].checked = !this.contacts[this.currentIndex].checked;
        break;

      default:
        break;
    }
  }

}
