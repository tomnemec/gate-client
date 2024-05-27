import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }
}
