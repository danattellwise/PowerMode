import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  token = '';

  constructor() { }

  ngOnInit(): void {
  }

  recordToken(value: string) {
    this.token = value;
    console.log(':::token:::', this.token);
    localStorage.setItem('token', this.token);
  }
}
