/* tslint:disable:no-unused-variable */

import { AUTH_PROVIDERS, AuthHttp }                                               from 'angular2-jwt';
import { TestBed, async, inject }                                                 from '@angular/core/testing';
import { HttpModule , Response, ResponseOptions, RequestOptionsArgs, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection }                                            from '@angular/http/testing';
import { Observable }                                                             from 'rxjs';

import { UserProfileService } from './user-profile.service';

describe('Service: UserProfile', () => {

  let userprofile = {
      firstname: 'test',
      lastname: 'test',
      fotourl: 'httsmth'
    };

  class MockAuthHttpBackend {
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      return Observable.of(new Response(
          new ResponseOptions( {
              status: 200,
              body: userprofile
          })
        ));
    };
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        UserProfileService,
        AUTH_PROVIDERS,
        { provide: AuthHttp, useClass: MockAuthHttpBackend }
      ]
    });
  }));

  it('should return current logged user profile',
  inject([AuthHttp, UserProfileService], (authHttp: MockAuthHttpBackend, service: UserProfileService) => {

    service.getShortProfile().subscribe((result) => {
      expect(result).toBe(userprofile);
    });
  }));
});
