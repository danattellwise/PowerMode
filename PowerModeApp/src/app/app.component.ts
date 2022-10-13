import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  constructor(private router: Router) {

  }

  // @HostListener('document:keydown.2')
  // goToSalesflowPage() {}

  // @HostListener('document:keydown.3')
  // goToSupportPage() {}

  // @HostListener('document:keydown.4')
  // goToOptionsPage() {}
}
