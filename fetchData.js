import { endpoint, searchValue, filterValue,  } from "./app.js";

async function fetchArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const data = await response.json();
  return data;
}

async function fetchTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const data = await response.json();
  return data;
}

async function fetchAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const data = await response.json();
  return data;
}

async function fetchSearchContent() {
  const response = await fetch(
    `${endpoint}/search?type=${filterValue}Name&q=${searchValue}`
  );
  const data = await response.json();
  return data;
}

export { fetchArtists, fetchTracks, fetchAlbums, fetchSearchContent };
