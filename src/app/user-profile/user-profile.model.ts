export class UserProfile {
  public firstname: string;
  public lastname: string;
  public fotourl: string;

  constructor(firstname, lastname, fotourl) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fotourl = fotourl;
  }
}
