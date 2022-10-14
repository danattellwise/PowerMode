import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { SalesflowPageComponent } from './salesflow-page/salesflow-page.component';
import {ContactService} from "./Service/contact.service";
import {SalesflowService} from "./services/salesflow.service";
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginService} from "./Service/login.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./Service/http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactsPageComponent,
    SalesflowPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    SalesflowService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
