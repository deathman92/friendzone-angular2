import { BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

const fakeBackendUrl = '/api/authenticate';

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less dev
  provide: Http,
  useFactory: (backend,  options) => {
    // configuring fake backend
    backend.connections.subscribe((connection: MockConnection) => {
      let testUser = { username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };

      // simulating server api call
      setTimeout(() => {
        // fake auth api endpoint
        if (connection.request.url.endsWith(fakeBackendUrl) && connection.request.method === RequestMethod.Post) {
          // get parameters form post request
          let params = JSON.parse(connection.request.getBody());

          // check credentials and return fake jwt
          if (params.username === testUser.username && params.password === testUser.password) {
            connection.mockRespond(new Response(
              new ResponseOptions({status: 200, body: {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'} })
            ));
            console.log('status: 200, token sent');
          } else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200 })
            ));
            console.log('status: 200, token not sent');
          }
        }

        // fake users api endpoint
        if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
          // check for auth token in header and return test use if valid
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: [testUser] })
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
