/* tslint:disable:no-unused-variable */

import { async, TestBed } from '@angular/core/testing';
import { Component }      from '@angular/core';
import { MaterialModule } from '@angular/material';

import { LoginComponent }  from './login.component';
import { AuthService }     from '../auth.service';

describe('Component: Login', () => {

  @Component({
    selector: 'fz-sign-in',
    template: '<h1></h1>'
  })
  class TestSignInComponent {}

  @Component({
    selector: 'fz-sign-up',
    template: '<h1></h1>'
  })
  class TestSignUpComponent {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [LoginComponent, TestSignInComponent, TestSignUpComponent] // declare the test component
    }).compileComponents();
  });

  it('should create an instance', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    let comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
