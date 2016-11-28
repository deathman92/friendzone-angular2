import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router }            from '@angular/router';

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
        this.authService.login(this.credentials.email, this.credentials.password).subscribe((loginRes) => {
          if (loginRes === true) {
            this.router.navigate(['/userprofile']);
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
