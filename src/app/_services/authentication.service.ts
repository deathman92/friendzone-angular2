import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const currentUser = 'currentUser';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http) {
    //set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem(currentUser));
    this.token = currentUser && currentUser.token;
  }

  login(username, password): Observable<boolean> {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        //login successful if there's a jwt in respose
        let token = response.json() && response.json().token;
        if (token) {
          //set token
          this.token = token;

          //store username and jwt in local storage to keep user logged in between pages refreshes
          localStorage.setItem(currentUser, JSON.stringify({ username: username, token: token }));

          // user is logged in
          return true;
        } else {
          // no, he doesn't
          return false;
        }
      });
  }

  logout(): void {
    //clear token and remove user from local storage
    this.token = null;
    localStorage.removeItem(currentUser);
  }

}
