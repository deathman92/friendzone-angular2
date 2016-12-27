export class Wallpost {
  public id: number;
  public text: string;
  public created_at: string;
  public short_profile: any;

  constructor(id, text, created_at, short_profile) {
    this.id = id;
    this.text = text;
    this.created_at = created_at;
    this.short_profile = short_profile;
  }
}
