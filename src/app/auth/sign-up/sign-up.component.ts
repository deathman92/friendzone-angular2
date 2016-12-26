import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService }    from '../auth.service';


@Component({
  selector: 'fz-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public credentials: Credentials = new Credentials();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp(event): void {
    event.preventDefault();

    this.authService.register(this.credentials).subscribe((registerRes) => {
      if (registerRes === true) {
        this.authService.login({ email: this.credentials.email, password: this.credentials.password }).subscribe((loginRes) => {
          if (loginRes === true) {
            this.router.navigateByUrl('/userprofile');
          }
        });
      }
    });
  }
}

class Credentials {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmation: string;
}


