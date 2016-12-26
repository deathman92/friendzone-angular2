import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router'
import { UserProfileService } from './user-profile.service';

const default_logo_path = '../../assets/img/default_logo.jpg';

@Component({
  selector: 'fz-app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public logourl: string;
  public currentUser: boolean;
  public wallposts: any;
  public userProfile = {
    id: null,
    firstname: '',
    lastname: '',
    photourl: ''
  };

  constructor(
    private userProfileService: UserProfileService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUserProfile();
    this.activatedRoute.params.subscribe(
      params => {
        this.currentUser = !params['id'];
      }
    )
  }

  private getUserProfile(): void {
    this.userProfileService.getShortProfile().subscribe(
      shortprofile => {
        this.userProfile = shortprofile;
        this.logourl = this.userProfile.photourl ? this.userProfile.photourl : default_logo_path;
        this.getWallposts();
      },
      error => {
        // TODO: error logic here;
        console.log('something went wrong');
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
