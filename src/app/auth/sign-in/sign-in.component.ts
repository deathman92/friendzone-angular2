import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router";

import { AuthService } from "../auth.service";
import {error} from "util";

@Component({
  selector: 'fz-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  signIn(event, username: string, password: string): void {
    event.preventDefault();

    this.authService.login(username, password)
      .subscribe(
        response => {
          if (response === true) {
            this.router.navigate(['/home']);
          } else {
            console.log('User are not logged in');
          }
        },
        error => {
            alert(error.text());
            console.error(error.text())
        });
  }

}
