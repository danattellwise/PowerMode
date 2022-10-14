import {AfterViewInit, Component, HostListener, Inject, OnInit} from '@angular/core';
import {SalesflowService} from "../services/salesflow.service";
import {SalesFlow} from "../contracts/salesflow";
import {DOCUMENT} from "@angular/common";
import {KeyBindService} from "../Service/key-bind.service";

@Component({
  selector: 'app-salesflow-page',
  templateUrl: './salesflow-page.component.html',
  styleUrls: ['./salesflow-page.component.scss']
})
export class SalesflowPageComponent implements OnInit, AfterViewInit {
  currentIndex = 0;
  loading = false;
  salesflows: any = [];
  salesflowsToShow: any = [];
  currentPage = 1;
  maxPage = 1;
  pageSize = 20;

  constructor(
    private salesflowService: SalesflowService,
    @Inject(DOCUMENT) private document: Document,
    private keyBindService: KeyBindService) { }

  ngOnInit(): void {
    this.initializeSalesflows();
  }

  ngAfterViewInit(): void {
    this.addHighlightClass(this.currentIndex);
  }

  initializeSalesflows() {
    this.loading = true;

    if(this.salesflows.length == 0) {
      this.salesflowService.getSalesflows().subscribe((res:SalesFlow[]) => {
        this.salesflows = res;
        for(let i = 0; i < this.salesflows.length; i++) {
          this.salesflows[i].Row = i + 1;
        }
        this.maxPage = Math.ceil(this.salesflows.length / this.pageSize);
        this.updateSalesflowsPage();
        this.loading = false;
      });
    }
  }

  isCheckboxChecked() {
    return this.salesflows.every((x: any) => x.checked);
  }

  checkAllCheckBox(ev: any) {
   this.salesflows.forEach((x: any) => x.checked = ev.target.checked);
  }

  toggleCheckbox(salesflow: any) {
    salesflow.checked = !salesflow.checked;
  }

  updateSalesflowsPage() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = this.currentPage * this.pageSize;
    this.salesflowsToShow = this.salesflows.slice(start, end);
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
    console.log('===-=====', event);
    switch (event.key) {
      case 'ArrowDown':
        this.removeHighlightClass(this.currentIndex);
        if (this.currentIndex >= this.salesflows.length - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
        this.addHighlightClass(this.currentIndex);
        break;

      case 'ArrowUp':
        this.removeHighlightClass(this.currentIndex);
        if (this.currentIndex <= 0) {
          this.currentIndex = this.salesflows.length - 1;
        } else {
          this.currentIndex--;
        }
        this.addHighlightClass(this.currentIndex);
        break;

      case ' ':
        this.salesflows[this.currentIndex].checked = !this.salesflows[this.currentIndex].checked;
        break;
      case 'ArrowLeft':
        if (this.currentPage == 1) {
          break;
        } else {
          this.currentPage--;
        }
        this.updateSalesflowsPage();
        break;

      case 'ArrowRight':
        if (this.currentPage == this.maxPage) {
          break;
        } else {
          this.currentPage++;
        }
        this.updateSalesflowsPage();
        break;

      case 'q':
        const actionType = 'ADD_TO_SALESFLOW';
        const resourceId = this.salesflowsToShow[this.currentIndex].Id;
        const resourceName = this.salesflowsToShow[this.currentIndex].Title;

        const keyBind = {
          actionType,
          resourceId,
          resourceName
        };

        this.keyBindService.setKeyBind(keyBind, 'q');

        break;

      default:
        break;
    }
  }
}
