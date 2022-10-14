import { Component, HostListener, Input } from '@angular/core';
import { SalesFlow } from './contracts/salesflow';
import { SalesflowService } from './services/salesflow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isRoute1 = true;
  isRoute2 = false;
  isRoutePowerMode = false;
  isRouteLogin = false;



  constructor(private router: Router) {
    window.addEventListener("keydown", function(e) {
      if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
      }

      if(e.key == 'a' && e.ctrlKey == true) {
        e.preventDefault();
      }

      if(e.key == 'p' && e.ctrlKey == true) {
        e.preventDefault();
      }

    }, false);
  }

  title = 'PowerModeApp';
  isLegendShowing: boolean = false;

  @HostListener('document:keypress', ['$event'])
  navigate(event: KeyboardEvent) {
    console.log('event', event);
    switch(event.key){
      case '1':
        this.router.navigateByUrl('/contacts');
        this.isRoute1 = true;
        this.isRoute2 = false;
        this.isRoutePowerMode = false;
        this.isRouteLogin =false;
        break;

      case '2':
        this.router.navigateByUrl('/salesflows');
        this.isRoute1 = false;
        this.isRoute2 = true;
        this.isRoutePowerMode = false;
        this.isRouteLogin =false;
        break;

      case '5':
        this.router.navigateByUrl('/login');
        this.isRoute1 = false;
        this.isRoute2 = false;
        this.isRoutePowerMode = false;
        this.isRouteLogin =true;
        break;

      case '`':
        // This toggles the legend overlay
        this.isLegendShowing = !this.isLegendShowing;
        break;
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
