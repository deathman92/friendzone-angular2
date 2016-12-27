import { AuthHttp }     from 'angular2-jwt';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { Response }    from '@angular/http';
import { UserProfile } from './shared';
import { Wallpost }    from './shared';
import 'rxjs/add/operator/map';

const prefix = '/api';
const getShortProfileUrl = prefix + '/shortprofile';
const getWallpostsUrl = prefix + '/wallpost/';
const addWallpostUrl = prefix + '/wallpost';
const addToFriendsUrl = prefix + '/friends';
const getFriendsUrl = prefix + '/friends';
const getSubscribersUrl = prefix + '/subscribers';
const getSubscriptionsUrl = prefix + '/subscriptions';
const searchUrl = prefix + '/searchprofile';

@Injectable()
export class UserProfileService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  getShortProfile(id: string): Observable<UserProfile> {
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
    return this.authHttp.post(addWallpostUrl, {text: text})
      .map((response: Response) => {
          return response.json();
        }
      )
  }

  addToFriends(userId: string): Observable<boolean> {
    return this.authHttp.post(addToFriendsUrl, {id: userId})
      .map((response: Response) => {
          return response.status === 200;
        }
      );
  }

  getFriends(): Observable<UserProfile> {
    return this.authHttp.get(getFriendsUrl)
      .map((response: Response) => {
          return response.json();
        }
      );
  }

  getSubscribers(): Observable<UserProfile> {
    return this.authHttp.get(getSubscribersUrl)
      .map((response: Response) => {
          return response.json();
        }
      );
  }

  getSubscriptions(): Observable<UserProfile> {
    return this.authHttp.get(getSubscriptionsUrl)
      .map((response: Response) => {
          return response.json();
        }
      );
  }

  search(term: string): Observable<UserProfile[]> {
    return this.authHttp.post(searchUrl, {searchstring: term})
      .map((response: Response) => {
          return response.json() as UserProfile[];
        }
      );
  }
}
