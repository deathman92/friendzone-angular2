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

    this.authService.register(this.credentials)
      .subscribe((res) => {
        if (res === true) {
          this.router.navigate(['/success']);
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
