import React from "react";
import styles from './Results.module.css'
import songs from '../../../../utils/Local'

function Results({ searchInput }){
    // Filter the songs based on the searchInput
    const filteredSongs = songs.filter((song) => {
    // Perform a case-insensitive search by converting both the search input and song name to lowercase
    const searchValue = searchInput.toLowerCase();
    const songName = song.name.toLowerCase();
    const songArtist = song.artist.toLowerCase();
    const songAlbum = song.album.toLowerCase();
    // Return songs that contain the search input as a substring in their name
    return (
      songName.includes(searchValue) ||
      songArtist.includes(searchValue) ||
      songAlbum.includes(searchValue)
    );
  });
    return (
        <div>
          
          <section className={styles.section}>
            <h1>Results for {searchInput}</h1>
            {filteredSongs.length > 0 ? (<ul>{filteredSongs.map((song) => (
              <li key={song.id}>
                {song.name} - {song.artist} - {song.album}
              </li>))}</ul>) : (<p>No results found.</p>)}
            {filteredSongs.length > 0 ? (<a href="/" className={styles.button}>
              <span className={styles.span}> Save to Spotify</span></a>) : ('')}
          </section>
        </div>
    )
}

export default Results;