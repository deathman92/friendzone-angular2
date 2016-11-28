import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'fz-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  signIn(event, email: string, password: string): void {
    this.loading = true;
    event.preventDefault();

    this.authService.login(email, password)
      .subscribe(
        response => {
          if (response === true) {
            this.router.navigateByUrl('/userprofile');
          } else {
            console.log('User are not logged in');
          }
        },
        error => {
            alert(error.text());
            console.error(error.text());
        });
    this.loading = false;
  }

  forget(event): void {
    event.preventDefault();
  }

}
