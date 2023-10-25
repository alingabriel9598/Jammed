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
      <div className={styles.trackList}>
        {favoriteSongs.map(song => (
          <div className={styles.track} key={song.id}>
            <div className={styles.trackInfo}>
              <h3 className={styles.trackName}>{song.name}</h3>
              <p className={styles.trackArtist}>{song.artist} | {song.album}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavSongs;