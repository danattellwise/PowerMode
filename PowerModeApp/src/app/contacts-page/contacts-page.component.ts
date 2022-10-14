import {AfterViewInit, Component, HostListener, Inject, OnInit} from '@angular/core';
import { Contacts } from '../Data/contact-mock-data';
import {DOCUMENT} from "@angular/common";
import {ContactService} from "../Service/contact.service";
import {SalesflowService} from "../services/salesflow.service";
import {KeyBindService} from "../Service/key-bind.service";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit, AfterViewInit {
  currentIndex = 0;
  contacts = Contacts;
  keyBinds: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private contactService: ContactService,
    private salesflowService: SalesflowService,
    private keyBindService: KeyBindService) { }

  ngOnInit(): void {
    this.keyBinds = this.keyBindService.getKeyBinds();
    this.contactService.getContactsByChips('companies', 'walmart', 1)
      .subscribe(res => {
        this.contacts = res.Contacts;
      });
  }

  ngAfterViewInit(): void {
    this.addHighlightClass(this.currentIndex);
  }

  checkAllCheckBox(ev: any) {
    this.contacts.forEach((c: any) => c.checked = ev.target.checked);
  }

  isAllCheckBoxChecked() {
    return this.contacts.every((c: any) => c.checked);
  }

  toggleCheckbox(contact: any) {
    contact.checked = !contact.checked;
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
          const allAreSelected = this.contacts.every((c: any) => c.checked == true);

          if (allAreSelected) {
            this.contacts.forEach((c:any) => c.checked = false);
          } else {
            this.contacts.forEach((c:any) => c.checked = true);
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

      case 'q':
        let selectedContacts = this.contacts.filter((c:any) => c.checked);
        selectedContacts.forEach((c:any) => {
          delete c['checked'];
        });

        const keyBind = this.keyBindService.getKeyBindByLetter('q');

        // Call appropriate service as per the action
        this.callServiceAssociatedToAction(keyBind, selectedContacts);
        break;

      default:
        break;
    }
  }

  private callServiceAssociatedToAction(keyBind: any, contacts: any) {
    const actionType = keyBind.actionType;
    const resourceId = keyBind.resourceId || 0;

    switch (actionType) {
      case 'ADD_TO_SALESFLOW' :
        this.salesflowService.addToSalesflow(contacts, resourceId);
        break;
    }
  }

}
