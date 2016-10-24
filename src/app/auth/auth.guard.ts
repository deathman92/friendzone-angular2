import { CanActivate, Router } from '@angular/router';
import { Injectable }          from '@angular/core';
import { AuthService }              from 'auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
