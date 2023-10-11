"use strict";

import { ListRenderer } from "./listRendere.js";
import { AritstRenderer } from "./renderHTML/renderArtist.js";
import { TrackRenderer } from "./renderHTML/renderTrack.js";
import { AlbumRenderer } from "./renderHTML/renderAlbum.js";
import { showSearchContent } from "./searchFunctions.js";
import {
  fetchArtists,
  fetchTracks,
  fetchAlbums,
  fetchSearchContent,
} from "./fetchData.js";

const endpoint = "https://mysongsdbcombackend.azurewebsites.net";
let filterValue = "artist";
let searchValue = "";
let contentFromSearch = [];

window.addEventListener("load", start);

function start() {
  console.log("Hello Team10");
  getArtists();
  document
    .querySelector("#filter-search")
    .addEventListener("change", filterContent);
  document
    .querySelector("#search-button")
    .addEventListener("click", searchContent);
}

// Artist functions

async function getArtists() {
  const artists = await fetchArtists();
  console.log(artists);
  showArtists(artists);
}

function showArtists(artists) {
  const artistELement = new ListRenderer();
  artistELement.render(artists, AritstRenderer);
}

// Filter functionality

function filterContent(event) {
  const value = event.target.value;
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

// Track functions

async function getTracks() {
  const tracks = await fetchTracks();
  showTracks(tracks);
}

function showTracks(tracks) {
  const trackELement = new ListRenderer();
  trackELement.render(tracks, TrackRenderer);
}

// Album functions

async function getAlbums() {
  const albums = await fetchAlbums();
  showAlbums(albums);
}

function showAlbums(albums) {
  const albumELement = new ListRenderer();
  albumELement.render(albums, AlbumRenderer);
}

// Search functions

function searchContent() {
  searchValue = document.querySelector("#search").value;
  getSearchContent();
}

async function getSearchContent() {
  contentFromSearch = await fetchSearchContent();
  showSearchContent();
}

export { endpoint, searchValue, filterValue, contentFromSearch };
