import { BaseRequestOptions } from "@angular/http";
import { CommonModule }       from '@angular/common';
import { FormsModule }        from "@angular/forms";
import { MaterialModule }     from '@angular/material';
import { MockBackend }        from "@angular/http/testing";
import { NgModule }           from '@angular/core';

import { AuthGuard }           from "./auth.guard";
import { AuthRoutingModule }   from "./auth-routing.module";
import { AuthService }         from './auth.service';
import { fakeBackendProvider } from "./fake-backend.provider";
import { LoginComponent }      from './login';
import { SignInComponent }     from './sign-in';
import { SignUpComponent }     from './sign-up';

// imports for mocking back-end


@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthService,
    AuthGuard,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})
export class AuthModule { }
