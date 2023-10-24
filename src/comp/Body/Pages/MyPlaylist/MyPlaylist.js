import React, { useEffect, useState } from 'react';
import Spotify from '../../../../utils/Spotify';
import styles from './MyPlaylist.module.css';

function MyPlaylist() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch user's playlists from Spotify
    Spotify.getPlaylists().then((data) => {
      setPlaylists(data);
    });
  }, []);

  return (
    <div className={styles.div}>
      <h1>My Playlists</h1>
      {playlists.map((playlist) => (
        <div key={playlist.id} className={styles.playlist}>
          <h2>{playlist.name}</h2>
          <p>{playlist.description}</p>
          <h3>Song List:</h3>
          <ul>
            {playlist.tracksData.map((track) => (
              <li key={track.id}>
                {track.name} - {track.artist} - {track.album}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MyPlaylist;