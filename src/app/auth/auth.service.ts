import { Http, Response }  from '@angular/http';
import { Injectable }      from '@angular/core';
import { Observable }      from 'rxjs';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';

const prefix = '/api';
const loginUrl = prefix + '/user_token';
const registerUrl = prefix + '/register';
const tokenName = 'id_token';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) {}

  login(auth): Observable<boolean> {
    return this.http.post(loginUrl, { auth: auth })
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
        return (response.status === 201);
      });
  }

  isCurrentUser(id:number):boolean {
    return this.jwtHelper.decodeToken(localStorage.getItem(tokenName)).sub === id;
  }

  logout(): void {
    localStorage.removeItem(tokenName);
  }

  isLoggedIn(): boolean {
    return tokenNotExpired();
  }
}
