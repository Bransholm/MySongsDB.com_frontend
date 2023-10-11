class AritstRenderer {
  render(artist) {
    const html =
      /*html*/

      `
            <article class="grab-artists">
            <h3>${artist.artistName}</h3>
            <p>Birthdate: ${artist.birthdate}</p>
            <p>Active since: ${artist.activeSince}</p>
            <p>Image: ${artist.artistImage}</p>
            <p>Artist ID: ${artist.artistID}</p>
            </article>
        `;

    return html;
  }
}

export { AritstRenderer };
