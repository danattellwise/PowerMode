import { Component, HostListener } from '@angular/core';
import { SalesFlow } from './contracts/salesflow';
import { SalesflowService } from './services/salesflow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
 
export class AppComponent {
  constructor(private router: Router, private SalesflowService:SalesflowService) { 
    this.getSalesflowData();
  }

  title = 'PowerModeApp';
  overlayShowing: boolean = false;

  @HostListener('document:keypress', ['$event'])
  navigate(event: KeyboardEvent) {
    console.log(event);

    switch(event.key){
      case '1': {
        this.router.navigateByUrl('/contacts');
        break;
      }
      case '2': {
        this.router.navigateByUrl('/salesflows');
        break;
      }
      case '`': {
        // This toggles the legend overlay
        this.overlayShowing = !this.overlayShowing;
        break;
      }
      default:
        return;
    }
  }

  getSalesflowData() {
    this.SalesflowService.getSalesflowData().subscribe((res:SalesFlow[]) => {
      console.log(res)
    })
  }

  // @HostListener('document:keydown.2')
  // goToSalesflowPage() {}

  // @HostListener('document:keydown.3')
  // goToSupportPage() {}

  // @HostListener('document:keydown.4')
  // goToOptionsPage() {}
}
