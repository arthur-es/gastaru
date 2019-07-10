import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://127.0.0.1:8000/api/';
  token = '';

  constructor(private http : HttpClient, @Inject(BROWSER_STORAGE) public storage: Storage) { }

  registerNewUser(userData:any): Observable<any> {
    return this.http.post(this.baseUrl+'users/', userData);
  }

  loginUser(userData:any): Observable<any> {
    return this.http.post(this.baseUrl+'auth/', userData);
  }

  public getToken() {
    let storageKey = 'gastaru_token';
    let value = this.storage.getItem(storageKey);
    try {
      return JSON.parse(value);
    } catch(e) {
      return value;
    }
  }
  
  public setToken(newToken: string) {
    let storageKey = 'gastaru_token';
    this.storage.setItem(storageKey, newToken);
  }

}
