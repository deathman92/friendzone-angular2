import { Injectable }  from '@angular/core';
import { Response }    from '@angular/http';
import { Observable }  from 'rxjs';
import { AuthHttp}     from 'angular2-jwt';
import { UserProfile } from './user-profile.model';
import { Wallpost }    from './wallpost.model';
import 'rxjs/add/operator/map';

const prefix = '/api';
const getShortProfileUrl = prefix + '/shortprofile';
const getWallpostsUrl = prefix + '/wallpost/';
const addWallpost = prefix + '/wallpost';
const addToFriends = prefix + '/friends';

@Injectable()
export class UserProfileService {

  constructor(private authHttp: AuthHttp) { }

  getShortProfile(id:string): Observable<UserProfile> {
    return this.authHttp.get(getShortProfileUrl + (id ? '/' + id : ''))
      .map((response: Response) => {
        return response.json();
      });
  }

  getWallposts(id: number): Observable<Wallpost> {
    return this.authHttp.get(getWallpostsUrl + id)
      .map((response: Response) => {
        return response.json();
      });
  }

  addWallpost(text: string): Observable<Wallpost> {
    return this.authHttp.post(addWallpost, {text: text})
      .map((response:Response) => {
        return response.json();
      }
    )
  }

  addToFriends(userId: string): Observable<boolean> {
    return this.authHttp.post(addToFriends, {id: userId})
      .map((response:Response) => {
          return response.status === 200;
        }
      );
  }
}
