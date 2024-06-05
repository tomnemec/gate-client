import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Observable, catchError, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  userRole: string = '';
  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): Observable<boolean> {
    if (!this.auth.isLoggedIn()) this.router.navigate(['login']);
    return this.auth.validateUser()!.pipe(
      switchMap((user: { role: string }) => {
        // Assuming user.role determines whether access is allowed.
        if (user.role === 'admin') {
          return [true];
        } else {
          this.router.navigate(['login']);
          return [false];
        }
      }),
      catchError(() => {
        this.router.navigate(['login']);
        return [false];
      })
    );
  }
}
