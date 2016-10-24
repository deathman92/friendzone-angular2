import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService }       from './auth.service';
import { LoginComponent }    from './login';
import { SignInComponent }   from './sign-in';
import { SignUpComponent }   from './sign-up';

// imports for mocking back-end


@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
