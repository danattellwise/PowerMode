import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { SalesflowPageComponent } from './salesflow-page/salesflow-page.component';
import {ContactService} from "./Service/contact.service";
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginService} from "./Service/login.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactsPageComponent,
    SalesflowPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
