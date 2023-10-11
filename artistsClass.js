export class artistConstructor {
  constructor(artist) {
    this.artistName = artist.artistName;
    this.birthdate = new Date(artist.birthdate);
    this.activeSince = artist.activeSince;
    this.artistImage = artist.artistImage;
    this.artistID = artist.artistID;
  }

  setBirthdate() {
    const date = this.birthday;
    const formatedDate = new Intl.DateTimeFormat("en", {
      dateStyle: "medium",
    }).format(date);

    return formatedDate.toLocaleString();
  }
}
