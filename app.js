"use strict"

const endpoint = "https://mysongsdbcombackend.azurewebsites.net";
let filterValue = "artist";
let searchValue = "";
let contentFromSearch = [];

window.addEventListener("load", start);

function start() {
    console.log("Hello Team10");
    getArtists()
    document.querySelector("#filter-search").addEventListener("change", filterContent);
    document.querySelector("#search-button").addEventListener("click", searchContent);
}

async function getArtists() {
    const artists = await fetchArtists();
    showArtists(artists);
}

async function fetchArtists() {
    const response = await fetch(`${endpoint}/artists`);
    const data = await response.json();
    return data;
}

function showArtists(artists) {
  document.querySelector("#display-content").innerHTML = "";
  for (const artist of artists) {
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
    document
      .querySelector("#display-content")
      .insertAdjacentHTML("beforeend", html);
  }
}

function filterContent(event) {
    const value = event.target.value
    if (value === "artists") {
        getArtists();
        filterValue = "artist";
        console.log(filterValue);
    } else if (value === "tracks") {
        getTracks();
        filterValue = "track";
        console.log(filterValue);
    } else if (value === "albums") {
        getAlbums();
        filterValue = "album";
        console.log(filterValue);
    }
}

async function getTracks() {
  const tracks = await fetchTracks();
  showTracks(tracks);
}

async function fetchTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const data = await response.json();
  return data;
}

function showTracks(tracks) {
  document.querySelector("#display-content").innerHTML = "";
  for (const track of tracks) {
    const html =
      /*html*/

      `
            <article class="grab-artists">
            <h3>${track.trackName}</h3>
            <p>length in seconds: ${track.length}</p>
            <p>Creation year: ${track.creationYear}</p>
            <p>Genre: ${track.genre}</p>
            <p>Track ID: ${track.trackID}</p>
            </article>
        `;
    document.querySelector("#display-content").insertAdjacentHTML("beforeend", html);
  }
}

////

async function getAlbums() {
  const albums = await fetchAlbums();
  showAlbums(albums);
}

async function fetchAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const data = await response.json();
  return data;
}

function showAlbums(albums) {
  document.querySelector("#display-content").innerHTML = "";
  for (const album of albums) {
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
    document.querySelector("#display-content").insertAdjacentHTML("beforeend", html);
  }
}

function searchContent() {
    searchValue = document.querySelector("#search").value;
    getSearchContent();
 }

async function getSearchContent() {
    contentFromSearch = await fetchSearchContent();
    showSearchContent();
}

async function fetchSearchContent() {
    const response = await fetch(`${endpoint}/search?type=${filterValue}Name&q=${searchValue}`);
    const data = await response.json();
    return data;
}

function showSearchContent() {
    if (searchValue === "") {
        console.log("Empty search" );
    } else if (filterValue === "artist") {
        document.querySelector("#display-content").innerHTML = "";
        document.querySelector("#search").value = "";
        for (const artist of contentFromSearch.artists) {
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
          document
            .querySelector("#display-content")
            .insertAdjacentHTML("beforeend", html);
        }
    } else if (filterValue === "track") {
        document.querySelector("#display-content").innerHTML = "";
        document.querySelector("#search").value = "";
        for (const track of contentFromSearch.tracks) {
          const html =
            /*html*/

            `
            <article class="grab-artists">
            <h3>${track.trackName}</h3>
            <p>length in seconds: ${track.length}</p>
            <p>Creation year: ${track.creationYear}</p>
            <p>Genre: ${track.genre}</p>
            <p>Track ID: ${track.trackID}</p>
            </article>
        `;
          document
            .querySelector("#display-content")
            .insertAdjacentHTML("beforeend", html);
        }
    } else {
        if (contentFromSearch.albums.length == 0) {
          getAlbums();
        }
          document.querySelector("#display-content").innerHTML = "";
        document.querySelector("#search").value = "";
        console.log(contentFromSearch.albums.length);
        for (const album of contentFromSearch.albums) {
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
          document
            .querySelector("#display-content")
            .insertAdjacentHTML("beforeend", html);
        }
    }
}