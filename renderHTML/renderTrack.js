class TrackRenderer {
  render(track) {
    const html =
      /*html*/

      `
            <article class="grab-artists">
            <h3>${track.trackName}</h3>
            <img src="./img/track.png" alt="" width="260px" />
            <p>length in seconds: ${track.length}</p>
            <p>Creation year: ${track.creationYear}</p>
            <p>Genre: ${track.genre}</p>
            <p>Track ID: ${track.trackID}</p>
            </article>
        `;

    return html;
  }
}

export { TrackRenderer };
