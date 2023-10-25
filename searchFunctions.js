import { ListRenderer } from "./listRendere.js";
import { AritstRenderer } from "./renderHTML/renderArtist.js";
import { TrackRenderer } from "./renderHTML/renderTrack.js";
import { AlbumRenderer } from "./renderHTML/renderAlbum.js";
import { searchValue, filterValue, contentFromSearch } from "./app.js";
import { artistConstructor } from "./artistsClass.js";

function clearSearchBar() {
  document.querySelector("#search").value = "";
}

function showSearchContent() {
  const newSearchResult = new ListRenderer();

  if (searchValue === "") {
    console.log("Empty search");
  
  } else if (filterValue === "artist") {
    
    document.querySelector("#display-content").innerHTML = "";
    clearSearchBar();

    // Laver en ny liste med artist.objekter
    const newArtistsArray = [];
    for (const artist of contentFromSearch.artists) {
      const artistObject = new artistConstructor(artist);
      newArtistsArray.push(artistObject);
    }
    
    // fodre den nye artist objekt
    newSearchResult.render(newArtistsArray, AritstRenderer);

  } else if (filterValue === "track") {
    document.querySelector("#display-content").innerHTML = "";
    clearSearchBar();

    newSearchResult.render(contentFromSearch.tracks, TrackRenderer);
  } else {
    if (contentFromSearch.albums.length == 0) {
      getAlbums();
    } else {
      document.querySelector("#display-content").innerHTML = "";
      clearSearchBar();
      console.log(contentFromSearch.albums.length);

      newSearchResult.render(contentFromSearch.albums, AlbumRenderer);
    }
  }
}

export { showSearchContent };
