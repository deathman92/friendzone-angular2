import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserProfile } from '../shared/user-profile.model';
import { UserProfileService } from '../user-profile.service';

const default_logo_path = '../../assets/img/default_logo.jpg';

@Component({
  selector: 'fz-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  term: string;
  users: Observable<UserProfile[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private userProfileService: UserProfileService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.users = this.searchTerms
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap(term => term
      ? this.userProfileService.search(term)
      : Observable.of<UserProfile[]>([]))
    .catch(error => {
      // TODO: real error handling
      console.log(error);
      return Observable.of<UserProfile[]>([]);
    });
  }

  getLogoPath(userPhotoUrl: string):string {
    return userPhotoUrl ? userPhotoUrl : default_logo_path;
  }
}
