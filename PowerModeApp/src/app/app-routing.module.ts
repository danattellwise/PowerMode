import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {SalesflowPageComponent} from "./salesflow-page/salesflow-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'salesflows', component: SalesflowPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
