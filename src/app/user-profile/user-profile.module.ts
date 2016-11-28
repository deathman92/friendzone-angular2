import { AuthModule }               from '../auth/auth.module';
import { CommonModule }             from '@angular/common';
import { MaterialModule }           from '@angular/material';
import { NgModule }                 from '@angular/core';
import { UserProfileComponent }     from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileService }       from './user-profile.service';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MaterialModule,
    AuthModule
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [
    UserProfileService
  ]
})
export class UserProfileModule { }
