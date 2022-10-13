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
  constructor(private router: Router) {
    window.addEventListener("keydown", function(e) {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
      }

      if(e.key == 'a' && e.ctrlKey == true) {
        e.preventDefault();
      }

    }, false);
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

  // @HostListener('document:keydown.2')
  // goToSalesflowPage() {}

  // @HostListener('document:keydown.3')
  // goToSupportPage() {}

  // @HostListener('document:keydown.4')
  // goToOptionsPage() {}
}
