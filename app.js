"use strict"

const endpoint = "https://mysongsdbcombackend.azurewebsites.net";
let filterValue = "artists";

window.addEventListener("load", start);

function start() {
    console.log("Hello Team10");
    getArtists()
    document.querySelector("#filter-search").addEventListener("change", filterContent);
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
    document.querySelector("#display-content").insertAdjacentHTML("beforeend", html);
  }
}

function filterContent(event) {
    const value = event.target.value
    if (value === "artists") {
        getArtists();
        filterValue = "artists";
        console.log(filterValue);
    } else if (value === "tracks") {
        getTracks();
        filterValue = "tracks";
        console.log(filterValue);
    } else if (value === "albums") {
        getAlbums();
        filterValue = "albums";
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

