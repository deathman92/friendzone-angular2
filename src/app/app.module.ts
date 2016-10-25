import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthModule }     from './auth';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule }       from '@angular/core';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent }    from './home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
