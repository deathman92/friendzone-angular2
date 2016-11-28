import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthModule }     from './auth';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule }       from '@angular/core';
import { UserProfileModule } from "./user-profile";

import { AppComponent }     from './app.component';
import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    UserProfileModule
  ],
  providers: [
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
