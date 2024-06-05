import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/resources/userLogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userToLogin: UserLogin = {
    email: '',
    password: '',
  };
  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }
  constructor(private loginService: LoginService, private router: Router) {}
  login() {
    this.loginService.login(this.userToLogin).subscribe({
      next: (r: { token: string }) => {
        console.log(r);
        localStorage.setItem('token', r.token);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.router.navigate(['']);
      },
    });
  }
}
