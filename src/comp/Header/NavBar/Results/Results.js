import React,{ useState, useEffect } from "react";
import styles from './Results.module.css'
import Spotify from "../../../../utils/Spotify";

function Results({ searchInput, onSongAdded }){
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
      // Clear search results before updating
      setSearchResults([]);
  
      // Execute search when searchInput changes
      if (searchInput) {
        Spotify.search(searchInput).then((results) => {
          setSearchResults(results);
        });
      }
    }, [searchInput]);
    return (
        <div>
          <section className={styles.section}>
            <h1>Results for {searchInput}</h1>
            {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((song) => (
              <li key={song.id}>
                {song.name} - {song.artist} - {song.album}
                <div><button className={styles.button}onClick={() => onSongAdded(song)}>Add to Playlist</button></div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
          </section>
        </div>
    )
}

export default Results;