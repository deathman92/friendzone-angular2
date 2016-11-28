/* tslint:disable:no-unused-variable */

import { async, inject, TestBed  }                            from '@angular/core/testing';
import { HttpModule , Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection }                        from '@angular/http/testing';

import { AuthService } from './auth.service.ts';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AuthService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  it('should return true if login and password correct',
    inject([XHRBackend, AuthService], (mockBackend, authService) => {

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions( {
                status: 200,
                body: {
                  jwt: token
                }
            })));
        });


      authService.login('right_email', 'right_password').subscribe((result) => {
        expect(result).toBe(true);
      });
  }));

  it('should return false otherwise',
    inject([XHRBackend, AuthService], (mockBackend, authService) => {

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions( {
                status: 200
            })));
      });

      authService.login('wrong_email', 'wrong_password').subscribe((result) => {
        expect(result).toBe(false);
      });
  }));

  it('should remove token from localStorage',
    inject([AuthService], (authService: AuthService) => {

      localStorage.setItem('id_token', 'fake-token-string');
      authService.logout();
      expect(localStorage.getItem('id_token')).toBe(null);
  }));

  it('should return true if user have been created',
    inject([XHRBackend, AuthService], (mockBackend, authService) => {

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions( {
              status: 201
            })));
      });

      let credentials = {
        credentials: {
          email: 'right_email',
          firstname: 'firstname',
          lastname: 'lastname',
          password: 'right_pass',
          confirmation: 'right_pass'
        }
      };

      authService.register(credentials).subscribe((result) => {
        expect(result).toBe(true);
      });
    })
  );

  it('should return false otherwise',
    inject([XHRBackend, AuthService], (mockBackend, authService) => {

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 401
            })));
        });

      let credentials = {
        credentials: {
          email: 'right_email',
          firstname: 'firstname',
          lastname: 'lastname',
          password: 'right_pass',
          confirmation: 'right_pass'
        }
      };

      authService.register(credentials).subscribe((result) => {
        expect(result).toBe(false);
      });
    })
  );
});
