import { Component, OnInit } from '@angular/core';
import { UserProfile } from './user-profile.model';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userProfile = {};

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  private getUserProfile(): void {
    this.userProfileService.getShortProfile().subscribe(
      shortprofile => {
        this.userProfile = shortprofile;
      },
      error => {
        //TODO: error logic here;
        console.log('something went wrong');
      }
    );
  }

}
