import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
// import { SuccessSignUpComponent } from './success-sign-up';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'success', component: SuccessSignUpComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
