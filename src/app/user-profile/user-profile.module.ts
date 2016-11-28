import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { MaterialModule } from "@angular/material";
import { AuthModule } from "../auth/auth.module";
import {UserProfileService} from "./user-profile.service";

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
