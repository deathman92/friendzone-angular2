import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

const default_logo_path = '../../assets/img/default_logo.jpg';

@Component({
  selector: 'fz-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  public friends: any;
  public subscribers: any;
  public subscriptions: any;

  constructor(
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
    this.initFriendList();
    this.initSubscribersList();
    this.initSubscriptionsList();
  }

  getLogoPath(userPhotoUrl: string):string {
    return userPhotoUrl ? userPhotoUrl : default_logo_path;
  }

  initFriendList(): void {
    this.userProfileService.getFriends().subscribe(
      result => {
        this.friends = result;
      }
    )
  }

  initSubscribersList(): void {
    this.userProfileService.getSubscribers().subscribe(
      result => {
        this.subscribers = result;
      }
    )
  }

  initSubscriptionsList(): void {
    this.userProfileService.getSubscriptions().subscribe(
      result => {
        this.subscriptions = result;
      }
    )
  }
}
