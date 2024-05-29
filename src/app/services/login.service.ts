import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../resources/userLogin';
import { JwtHelperService } from '@auth0/angular-jwt'; // Import the JwtHelperService class
import { User } from '../resources/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(credentials: UserLogin): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      'https://sw02660.global.hvwan.net/validator/api/auth',
      credentials
    );
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    let jwtHelper = new JwtHelperService();

    if (token) return true;
    else return false;
  }
  getcurrentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;
    let jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token) as User;
  }
  validateUser() {
    const email = this.getcurrentUser()!.Email;
    const appName = 'Gate';
    const url =
      'https://sw02660.global.hvwan.net/validator/api/accessvalidation?email=' +
      encodeURIComponent(email) +
      '&appName=' +
      appName;

    if (!email) return null;
    return this.http.get<{ role: string }>(url);
  }
  getValidation() {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token);
    let options = { headers: headers };

    return options;
  }
}
