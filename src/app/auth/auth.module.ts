import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';
import { MaterialModule }    from '@angular/material';
import { Ng2MaterialModule } from 'ng2-material';
import { NgModule }          from '@angular/core';

import { AuthGuard }         from './auth.guard';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService }       from './auth.service';
import { LoginComponent }    from './login';
import { SignInComponent }   from './sign-in';
import { SignUpComponent }   from './sign-up';


@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    Ng2MaterialModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent,
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
