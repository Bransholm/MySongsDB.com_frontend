class AritstRenderer {
  render(artist) {
    console.log(artist);
    const html =
      /*html*/

      `
            <article class="grab-artists">
            <h3>${artist.artistName}</h3>
            <img src="../img/artist.png" alt="${artist.artistName}">
            <p>Birthdate: ${artist.setBirthdate(artist.birthdate)}</p>
            <p>Active since: ${artist.activeSince}</p>
            <p>Image: ${artist.artistImage}</p>
            <p>Artist ID: ${artist.artistID}</p>
            </article>
        `;

    return html;
  }
}

export { AritstRenderer };
