import { Component } from '@angular/core';
import { SalesFlow } from './contracts/salesflow';
import { SalesflowService } from './services/salesflow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
 
export class AppComponent {
  constructor(private SalesflowService:SalesflowService) { 
    this.getSalesflowData();
  }
  title = 'PowerModeApp';

  getSalesflowData() {
    this.SalesflowService.getSalesflowData().subscribe((res:SalesFlow[]) => {
      console.log(res)
    })
  }
}
