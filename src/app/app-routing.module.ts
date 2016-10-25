import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard}     from "./auth/auth.guard";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
