import { Http, Response }  from '@angular/http';
import { Injectable }      from '@angular/core';
import { Observable }      from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

const tokenName = 'id_token';

@Injectable()
export class AuthService {
  public token: string;

  constructor(private http: Http) {}

  login(username, password): Observable<boolean> {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          localStorage.setItem(tokenName, token);
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    localStorage.removeItem(tokenName);
  }

  isLoggedIn(): boolean {
    return tokenNotExpired();
  }
}
