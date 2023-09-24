"use strict"

const endpoint = "https://mysongsdbcombackend.azurewebsites.net";

window.addEventListener("load", start);

function start() {
    console.log("Hello Team10");
    getArtists();
}

async function getArtists() {
    const artists = await fetchArtists();
    console.log(artists);
    showArtists(artists);
}

async function fetchArtists() {
    const response = await fetch(`${endpoint}/artists`);
    const data = await response.json();
    return data;
}

function showArtists(artists) {
  //document.querySelector("#display-artists").innerHTML = "";
  for (const artist of artists) {
    const html =
        /*html*/
      
        `
            <article>
            <h3>${artist.artistName}</h3>
            <p>Birthdate: ${artist.birthdate}</p>
            <p>Active since: ${artist.activeSince}</p>
            <p>Image: ${artist.artistImage}</p>
            <p>Artist ID: ${artist.artistID}</p>
            </article>
        `;
    document.querySelector("#display-artists").insertAdjacentHTML("beforeend", html);
  }
}