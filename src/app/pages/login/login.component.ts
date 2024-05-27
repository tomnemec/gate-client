import { Component } from '@angular/core';
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
  constructor(private loginService: LoginService) {}
  login() {
    this.loginService.login(this.userToLogin).subscribe({
      next: (r: { token: string }) => {
        console.log(r);
        localStorage.setItem('token', r.token);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
