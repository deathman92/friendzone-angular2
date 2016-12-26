import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router'
import { UserProfileService } from './user-profile.service';
import { AuthService } from '../auth/auth.service';

const default_logo_path = '../../assets/img/default_logo.jpg';

@Component({
  selector: 'fz-app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public logourl: string;
  public currentUser: boolean;
  public isFriend: boolean;
  public wallposts: any;
  public userProfile: any;

  constructor(
    private userProfileService: UserProfileService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserProfile();
  }

  addToFriend(): void {
    this.userProfileService.addToFriends(this.userProfile.id).subscribe(
      result => {
        if (result) {
          this.getUserProfile();
        }
      }
    );
  }

  private getUserProfile(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.userProfileService.getShortProfile(params['id']).subscribe(
          shortprofile => {
            this.userProfile = shortprofile;
            this.currentUser = this.authService.isCurrentUser(shortprofile.id);
            this.logourl = this.userProfile.photourl ? this.userProfile.photourl : default_logo_path;
            this.getWallposts();
          },
          error => {
            // TODO: error logic here;
            console.log('something went wrong');
          }
        );
      }
    );

  }

  private getWallposts() {
    this.userProfileService.getWallposts(this.userProfile.id).subscribe(
      wallposts => {
        this.wallposts = wallposts;
      }
    )
  }
}
