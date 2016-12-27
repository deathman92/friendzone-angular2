import { AuthService } from './auth';
import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

@Component({
  selector: 'fz-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Welcome to FriendZone!';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout():void {
    this.router.navigateByUrl('/login');
  }

  goHome():void {
    this.router.navigateByUrl('/userprofile');
  }
}
