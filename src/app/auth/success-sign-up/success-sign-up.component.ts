import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-sign-up',
  templateUrl: './success-sign-up.component.html',
  styleUrls: ['./success-sign-up.component.scss']
})
export class SuccessSignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
