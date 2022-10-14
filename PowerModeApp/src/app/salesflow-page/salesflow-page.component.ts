import {Component, HostListener, OnInit} from '@angular/core';
import {SalesflowService} from "../services/salesflow.service";
import {SalesFlow} from "../contracts/salesflow";

@Component({
  selector: 'app-salesflow-page',
  templateUrl: './salesflow-page.component.html',
  styleUrls: ['./salesflow-page.component.scss']
})
export class SalesflowPageComponent implements OnInit {
  loading = false;
  salesflows: any = [];
  salesflowsToShow: any = [];
  currentPage = 1;
  maxPage = 1;
  pageSize = 20;

  constructor(private salesflowService: SalesflowService) { }

  ngOnInit(): void {
    this.initializeSalesflows();
  }

  initializeSalesflows() {
    this.loading = true;
    this.salesflowService.getSalesflows().subscribe((res:SalesFlow[]) => {
     this.salesflows = res;
     for(let i = 0; i < this.salesflows.length; i++) {
       this.salesflows[i].Row = i + 1;
     }
     this.maxPage = Math.ceil(this.salesflows.length / this.pageSize);
     this.updateSalesflowsPage();
     this.loading = false;
    })
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

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log('===-=====', event);
    switch (event.key) {
      // TODO: Implement for salesflow page
      // case 'ArrowDown':
      //   this.removeHighlightClass(this.currentIndex);
      //   if (this.currentIndex >= this.contacts.length - 1) {
      //     this.currentIndex = 0;
      //   } else {
      //     this.currentIndex++;
      //   }
      //   this.addHighlightClass(this.currentIndex);
      //   break;
      //
      // case 'ArrowUp':
      //   this.removeHighlightClass(this.currentIndex);
      //   if (this.currentIndex <= 0) {
      //     this.currentIndex = this.contacts.length - 1;
      //   } else {
      //     this.currentIndex--;
      //   }
      //   this.addHighlightClass(this.currentIndex);
      //   break;
      //
      // case ' ':
      //   this.contacts[this.currentIndex].checked = !this.contacts[this.currentIndex].checked;
      //   break;
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

      default:
        break;
    }
  }
}
