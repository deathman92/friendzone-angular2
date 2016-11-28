import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService } from '../auth.service';

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

  signIn(event, email: string, password: string): void {
    event.preventDefault();

    this.authService.login(email, password)
      .subscribe(
        response => {
          if (response === true) {
            this.router.navigate(['/userprofile']);
          } else {
            console.log('User are not logged in');
          }
        },
        error => {
            alert(error.text());
            console.error(error.text());
        });
  }

  forget(event): void {
    event.preventDefault();
  }

}
