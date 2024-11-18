import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  logged: boolean = false;
  constructor(
    private loginService: LoginService
  ) {}
  async ngOnInit(): Promise<void> {
    await this.isLogged();
  }

  isLogged() {
    this.logged = this.loginService
      .isLoggedIn();
  }

}


