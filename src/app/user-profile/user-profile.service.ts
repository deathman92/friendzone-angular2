import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';
import { Observable }      from 'rxjs';
import { AuthHttp} from 'angular2-jwt';
import { UserProfile } from './user-profile.model';
import 'rxjs/add/operator/map';

const prefix = '/api';
const getShortProfileUrl = prefix + '/shortprofile';

@Injectable()
export class UserProfileService {

  constructor(private authHttp: AuthHttp) { }

  getShortProfile(): Observable<UserProfile> {
    return this.authHttp.get(getShortProfileUrl)
      .map((response: Response) => {
        let userProfile = response.json();
        return userProfile;
      });
  }
}
