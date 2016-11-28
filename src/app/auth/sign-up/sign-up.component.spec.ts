/* tslint:disable:no-unused-variable */

import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }                              from '@angular/forms';
import { MaterialModule }                           from '@angular/material';
import { Observable }                               from 'rxjs';
import { Router }                                   from '@angular/router';

import { SignUpComponent } from './sign-up.component';
import { AuthService }     from '../auth.service';

describe('Component: SignIn', () => {

  class RouterStub {
    navigateByUrl(url: string): string { return url; }
  }

  let fixture: ComponentFixture<SignUpComponent>;
  let comp: SignUpComponent;
  let authServiceStub = {
    login: (email: string, password: string) => { return Observable.of(true); },
    register: (credentials: {
          email: string,
          firstname: string,
          lastname: string,
          password: string,
          confirmation: string
        }) => { return Observable.of(true); }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule
      ],
      declarations: [SignUpComponent],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useClass: RouterStub }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SignUpComponent);
      comp = fixture.componentInstance;
    });
  }));

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should navigate to userprofile after registration',
    inject([Router], (router: Router) => {

      let spy = spyOn(router, 'navigateByUrl');

      comp.credentials = {
        email: 'right_email',
        firstname: 'firstname',
        lastname: 'lastname',
        password: 'right_pass',
        confirmation: 'right_pass'
      };

      fixture.detectChanges();

      comp.signUp(new Event('click'));

      let navParams = spy.calls.first().args[0];

      expect(navParams).toBe('/userprofile');

    })
  );
});
