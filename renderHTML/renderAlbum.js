class AlbumRenderer {
  render(album) {
    const html =
      /*html*/

      `
            <article class="grab-artists">
            <h3>${album.albumName}</h3>
            <p>Edition: ${album.edition}</p>
            <p>Creation year: ${album.year}</p>
            <p>Image: ${album.albumImage}</p>
            <p>Album ID: ${album.albumID}</p>
            </article>
        `;

    return html;
  }
}

export { AlbumRenderer };
