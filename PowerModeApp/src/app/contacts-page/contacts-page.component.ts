import { AfterViewInit, Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Contacts } from '../Data/contact-mock-data';
import { DOCUMENT } from "@angular/common";
import { ContactService } from "../Service/contact.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit, AfterViewInit {
  currentIndex = 0;
  contacts = Contacts;

  @ViewChild('content')
  private content: any = null
  bulkActionModalOpen: any = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private contactService: ContactService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.contactService.getContactsByChips('companies', 'walmart', 1)
      .subscribe(res => {
        this.contacts = res.Contacts;
      });
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

  bulkAction() {
    let checkedContacts = this.contacts.filter(c => c.checked);
    if (checkedContacts?.length > 1 && !this.bulkActionModalOpen) {
      this.bulkActionModalOpen = true;
      this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        // this.closeResult = `Closed with: ${result}`;
        this.bulkActionModalOpen = false;
      }, (reason: any) => {
        this.bulkActionModalOpen = false;
        // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  toggleSetting() {
    this.contacts.filter(c => c.checked).forEach(contact => contact.DoNotEmail = !contact.DoNotEmail)
    this.modalService.dismissAll();
    this.bulkActionModalOpen = false;
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

      case 'Shift':
        this.bulkAction();
        break;
      
      case '1': this.toggleSetting();
        break;

      default:
        break;
    }
  }

}
