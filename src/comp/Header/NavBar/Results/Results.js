import React,{ useState, useEffect } from "react";
import styles from './Results.module.css'
import Spotify from "../../../../utils/Spotify";

function Results({ searchInput, onSongAdded }){
    const [searchResults, setSearchResults] = useState([]);
    const [confirmationMessage, setConfirmationMessage] = useState(null);
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
    const handleSongAdded = (song) => {
      onSongAdded(song);
  
      // Show a confirmation message
      setConfirmationMessage("Song added to Create Playlist Menu");
  
      // Hide the confirmation message after 3 seconds (adjust the duration as needed)
      setTimeout(() => {
        setConfirmationMessage(null);
      }, 3000);
    };
    return (
        <div>
          <section className={styles.section}>
            <h1>Results for {searchInput}</h1>
            {confirmationMessage && <p>{confirmationMessage}</p>}
            {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((song) => (
              <li key={song.id}>
                {song.name} - {song.artist} - {song.album}
                <div><button className={styles.button}onClick={() => handleSongAdded(song)}>Add to Playlist</button></div>
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