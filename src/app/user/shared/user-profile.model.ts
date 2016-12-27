export class UserProfile {
  public id: number;
  public firstname: string;
  public lastname: string;
  public photourl: string;
  public status: string;

  constructor(id, firstname, lastname, photourl, status) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.photourl = photourl;
    this.status = status;
  }
}
