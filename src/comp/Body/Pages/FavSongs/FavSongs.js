import React, { useState, useEffect } from 'react';
import Spotify from '../../../../utils/Spotify';
import styles from './FavSongs.module.css';

function FavSongs() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    Spotify.getFavoriteSongs()
      .then(songs => {
        setFavoriteSongs(songs);
      })
      .catch(error => {
        // Handle errors if the API request fails
        console.error('Error fetching favorite songs:', error);
      });
  }, []);

  return (
    <div className={styles.div}>
      <h1>Your Favorite Songs</h1>
      <ul>
        {favoriteSongs.map(song => (
          <li key={song.id}>
            {song.name} - {song.artist} - {song.album}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavSongs;