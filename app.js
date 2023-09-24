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

function getTracks() {
    document.querySelector("#display-content").innerHTML = "Tracks";
}

function getAlbums() {
    document.querySelector("#display-content").innerHTML = "Albums";    
}