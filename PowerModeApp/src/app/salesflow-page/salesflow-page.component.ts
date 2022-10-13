import { Component, OnInit } from '@angular/core';
import {SalesflowService} from "../services/salesflow.service";
import {SalesFlow} from "../contracts/salesflow";

@Component({
  selector: 'app-salesflow-page',
  templateUrl: './salesflow-page.component.html',
  styleUrls: ['./salesflow-page.component.scss']
})
export class SalesflowPageComponent implements OnInit {

  salesflows: any;

  constructor(private salesflowService: SalesflowService) { }

  ngOnInit(): void {
    this.initializeSalesflows();
  }

  initializeSalesflows() {
    this.salesflowService.getSalesflowData().subscribe((res:SalesFlow[]) => {
     this.salesflows = res;
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
}
