import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }            from '../auth';
import { FriendListComponent }  from './friend-list';
import { UserProfileComponent } from './user-profile';

const routes: Routes = [
  { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'userprofile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserProfileRoutingModule {}
