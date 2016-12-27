import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { MaterialModule }           from '@angular/material';
import { Ng2MaterialModule }        from 'ng2-material';
import { NgModule }                 from '@angular/core';

import { AuthModule }               from '../auth';
import { FriendListComponent }      from './friend-list';
import { UserMenuComponent }        from './user-menu';
import { UserProfileComponent }     from './user-profile';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileService }       from './user-profile.service';
import { UserSearchComponent }      from './user-search';
import { WallComponent }            from './wall';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    Ng2MaterialModule,
    UserProfileRoutingModule
  ],
  declarations: [
    UserProfileComponent,
    WallComponent,
    UserMenuComponent,
    FriendListComponent,
    UserSearchComponent
  ],
  providers: [
    UserProfileService
  ],
  exports: [
    UserSearchComponent
  ]
})
export class UserProfileModule { }
