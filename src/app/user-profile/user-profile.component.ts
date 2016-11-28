import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'fz-app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userProfile = {
    firstname: 'comp',
    lastname: 'comp',
    fotourl: null
  };

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
        // TODO: error logic here;
        console.log('something went wrong');
      }
    );
  }

}
