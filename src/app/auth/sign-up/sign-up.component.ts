import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fz-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUp(event): void {
    event.preventDefault();
  }
}
