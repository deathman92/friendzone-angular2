import { BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

const prefix = '/api';
const loginUrl = prefix + '/user_token';
const registerUrl = prefix + '/register';
const getShortProfileUrl = prefix + '/shortprofile';
const tokenString = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less dev
  provide: Http,
  useFactory: (backend,  options) => {
    // configuring fake backend
    backend.connections.subscribe((connection: MockConnection) => {
      let testUserProfile = {firstname: 'firstname', lastname: 'lastname', fotourl: null};
      let testUser = {email: 'test', password: 'test'};

      // simulating server api call
      setTimeout(() => {
        // fake login endpoint
        if (connection.request.url.endsWith(loginUrl) && connection.request.method === RequestMethod.Post) {
          // get parameters form post request
          let auth = connection.request.json().auth;

          // check credentials and return fake jwt
          if (auth.email === testUser.email && auth.password === testUser.password) {
            connection.mockRespond(new Response(
              new ResponseOptions({status: 200, body: {jwt: tokenString} })
            ));
            console.log('status: 200, token sent');
          } else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200 })
            ));
            console.log('status: 200, token not sent');
          }
        }
        // fake register endpoint
        if (connection.request.url.endsWith(registerUrl) && connection.request.method === RequestMethod.Post) {
            connection.mockRespond(new Response(
              new ResponseOptions({status: 201})
            ));
            console.log('status: 201, user created');
        }
        // fake getProfile endpoint
        if (connection.request.url.endsWith(getShortProfileUrl) && connection.request.method === RequestMethod.Get) {
          // check for auth token in header and return test use if valid
          if (connection.request.headers.get('Authorization') === 'Bearer ' + tokenString) {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: [testUserProfile] })
            ));
          } else {
            // return 401 if token is invalid or null
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 401 })
            ));
          }
        }
      }, 500);
    });

    return new Http(backend, options);
  },
  deps: [MockBackend, BaseRequestOptions]
};

