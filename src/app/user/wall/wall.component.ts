import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService }       from '../user-profile.service';

const default_logo_path = '../../assets/img/default_logo.jpg';

@Component({
  selector: 'fz-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  @Input()
  public wallposts;
  public new_post_data: string;

  constructor(
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
  }

  getLogoPath(userPhotoUrl: string):string {
    return userPhotoUrl ? userPhotoUrl : default_logo_path;
  }

  addPost(event): void {
    event && event.preventDefault();
    this.userProfileService.addWallpost(this.new_post_data).subscribe(
      result => {
        this.wallposts.unshift(result);
        this.new_post_data = null;
      }
    );
  }
}
