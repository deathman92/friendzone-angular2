/* tslint:disable:no-unused-variable */

import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule }                           from '@angular/material';
import { Observable }                               from 'rxjs';
import { Router }                                   from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { AuthService }     from '../auth.service';

describe('Component: SignIn', () => {

  class RouterStub {
    navigate(commands: any[]): string { return commands[0]; }
  }

  let fixture: ComponentFixture<SignInComponent>;
  let comp: SignInComponent;
  let authServiceStub = {
    login: true,
    logout: () => { localStorage.removeItem('id_token'); }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [SignInComponent],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useClass: RouterStub }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SignInComponent);
      comp = fixture.componentInstance;
    });
  }));

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should logout user on init', () => {
    localStorage.setItem('id_token', 'some fake token string');
    fixture.detectChanges();

    expect(localStorage.getItem('id_token')).toBe(null);
  });
});
