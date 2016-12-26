import { AuthModule }               from '../auth/auth.module';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { MaterialModule }           from '@angular/material';
import { Ng2MaterialModule }        from 'ng2-material';
import { NgModule }                 from '@angular/core';
import { UserProfileComponent }     from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileService }       from './user-profile.service';
import { WallComponent }            from './wall';

@NgModule({
  imports: [
    AuthModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    Ng2MaterialModule,
    UserProfileRoutingModule
  ],
  declarations: [
    UserProfileComponent,
    WallComponent
  ],
  providers: [
    UserProfileService
  ]
})
export class UserProfileModule { }
