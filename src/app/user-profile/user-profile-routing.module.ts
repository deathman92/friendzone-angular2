import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'userprofile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserProfileRoutingModule {}
