import { AUTH_PROVIDERS }    from 'angular2-jwt';
import { AuthModule }        from './auth';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { HttpModule }        from '@angular/http';
import { MaterialModule }    from '@angular/material';
import { Ng2MaterialModule } from 'ng2-material';
import { NgModule }          from '@angular/core';
import { UserProfileModule } from './user-profile';

import { AppComponent }      from './app.component';
import { AppRoutingModule }  from './app-routing.module';

// imports for mocking back-end
import { fakeBackendProvider } from './mock';
import { BaseRequestOptions }  from '@angular/http';
import { MockBackend }         from '@angular/http/testing';
import { EmailDirective }      from './shared';

@NgModule({
  declarations: [
    AppComponent,
    EmailDirective
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2MaterialModule.forRoot(),
    MaterialModule.forRoot(),
    AppRoutingModule,
    UserProfileModule
  ],
  providers: [
    AUTH_PROVIDERS,

    // providers used to create fake backend
    // fakeBackendProvider,
    // BaseRequestOptions,
    // MockBackend
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
