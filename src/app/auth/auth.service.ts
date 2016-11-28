import { Http, Response }  from '@angular/http';
import { Injectable }      from '@angular/core';
import { Observable }      from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

const prefix = '/api';
const loginUrl = prefix + '/user_token';
const registerUrl = prefix + '/register';
const tokenName = 'id_token';

@Injectable()
export class AuthService {
  public token: string;

  constructor(private http: Http) {}

  login(email, password): Observable<boolean> {
    return this.http.post(loginUrl, { auth: { email: email, password: password } })
      .map((response: Response) => {
        let token = response.json() && response.json().jwt;
        if (token) {
          localStorage.setItem(tokenName, token);
          return true;
        } else {
          return false;
        }
      });
  }

  register(credentials): Observable<boolean> {
    return this.http.post(registerUrl, {credentials: credentials})
      .map((response: Response) => {
        return response.status == 201;
      });
  }

  logout(): void {
    localStorage.removeItem(tokenName);
  }

  isLoggedIn(): boolean {
    return tokenNotExpired();
  }
}
