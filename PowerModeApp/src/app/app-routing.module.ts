import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {SalesflowPageComponent} from "./salesflow-page/salesflow-page.component";
import { SalesflowService } from './services/salesflow.service';

const routes: Routes = [
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'salesflows', component: SalesflowPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[SalesflowService]
})
export class AppRoutingModule { }
