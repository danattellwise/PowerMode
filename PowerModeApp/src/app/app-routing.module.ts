import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {SalesflowPageComponent} from "./salesflow-page/salesflow-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import { SalesflowService } from './services/salesflow.service';
import { PowerModeComponent } from './power-mode/power-mode.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'salesflows', component: SalesflowPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'power-mode', component: PowerModeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[SalesflowService]
})
export class AppRoutingModule { }
