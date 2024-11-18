import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  //localurl for testing
url = 'http://localhost:5080/api/';

  //production url
    //url = '/gateapi/api/';
  constructor(private http: HttpClient) {}

  getAll<T>(url: string) {
    return this.http.get<T>(this.url + url);
  }
  getSingle<T>(url: string) {
    return this.http.get(this.url + url);
  }
  //not needed in prod....should be handled by getsingle
  getExternalSingle(url: string) {
    return this.http.get(url);
  }
  delete(url: string) {
    return this.http.delete(this.url + url);
  }
  create<T>(data: T, url: string) {
    return this.http.post(this.url + url, data);
  }
  update<T>(data: T, url: string) {
    return this.http.put(this.url + url, data);
  }
}
