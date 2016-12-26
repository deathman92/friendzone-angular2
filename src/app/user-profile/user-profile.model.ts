export class UserProfile {
  public id: number;
  public firstname: string;
  public lastname: string;
  public photourl: string;

  constructor(id, firstname, lastname, photourl) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.photourl = photourl;
  }
}
