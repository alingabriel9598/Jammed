import React, {useState} from 'react';
import styles from './CreatePlaylist.module.css';
import Spotify from '../../../../utils/Spotify';

function CreatePlaylist({ selectedSongs, onDeleteSong,  clearSelectedSongs }) { // Receive the selectedSongs prop
  const [playlistName, setPlaylistName] = useState('');
  const handlePlaylistNameChange = (event) => {
    // Update the playlistName state when the input changes
    setPlaylistName(event.target.value);
  };
  const handleSavePlaylist = async () => {
    if (!playlistName) {
      alert("Please enter a playlist name before saving.");
      return;
    }

    if (selectedSongs.length === 0) {
      alert("Your playlist is empty. Add songs before saving.");
      return;
    }

    // Extract the track URIs from the playlistSongs array
    const trackUris = selectedSongs.map((song) => song.uri);

    // Call the savePlaylist function from Spotify.js
     await Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        alert("Playlist saved to Spotify!");
      })
      .catch((error) => {
        alert(`An error occurred: ${error}`);
      });

      clearSelectedSongs();
  };
  
  return (
    <div className={styles.div}>
      <h1>Create your Playlist</h1>
      <form>
        <input placeholder="Name of your new playlist" 
               value={playlistName}
               type="text"
               onChange={handlePlaylistNameChange}
               className={styles.input}/>
      </form>
      <h4>Songs List</h4>
      <div className={styles.trackList}>
        {selectedSongs.map((song) => (
          <div className={styles.track}key={song.id}>
            <div className={styles.trackInfo}key={song.id}>
                <div>
                  <h3 className={styles.trackName}>{song.name}</h3>
                  <p className={styles.trackArtist}>{song.artist} | {song.album}</p>
                </div>
          </div>
          <button onClick={() => onDeleteSong(song) } className={styles.button}>-</button>
          </div>
        ))}
      </div>
      <button onClick={handleSavePlaylist} className={styles.savePlaylistButton}>Save Playlist</button>
    </div>
  );
}

export default CreatePlaylist;