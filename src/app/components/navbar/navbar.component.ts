import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('token');
    this.refreshPage();
  }
  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }
  shouldShowLogout(): boolean {
    return this.router.url !== '/visits';
  }


  refreshPage() {
    window.location.reload();
  }

}
