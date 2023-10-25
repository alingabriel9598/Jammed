import React, { useEffect, useState } from 'react';
import Spotify from '../../../../utils/Spotify';
import styles from './MyPlaylist.module.css';

function MyPlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  

  useEffect(() => {
    // Fetch user's playlists from Spotify
    Spotify.getPlaylists().then((data) => {
      setPlaylists(data);
    });
  }, []);

  const handlePlaylistClick = async (playlistId) => {
    setSelectedPlaylist(playlistId);
  };
  
  const handleBackClick = () => {
    setSelectedPlaylist(null);
  };

  return (
    <div className={styles.div}>
      <h1>My Playlists</h1>
      {selectedPlaylist === null ? (
        <div>
          {playlists.map((playlist) => (
            <div key={playlist.id} className={styles.playlistItem}>
              <button onClick={() => handlePlaylistClick(playlist.id)} className={styles.button}>
                {playlist.name}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleBackClick} className={styles.button}>
            Back
          </button>
          <h2>Songs in {playlists.find((p) => p.id === selectedPlaylist).name}</h2>
          <div className={styles.trackList}>
            {playlists.find((p) => p.id === selectedPlaylist).tracksData.map((track) => (
              <div className={styles.track} key={track.id}>
                <div className={styles.trackInfo}>
                  <h4 className={styles.trackName}>{track.name}</h4>
                  <p className={styles.trackArtist}>
                    {track.artist} | {track.album}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPlaylist;