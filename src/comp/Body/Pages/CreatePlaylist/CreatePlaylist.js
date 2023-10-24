import React, {useState} from 'react';
import styles from './CreatePlaylist.module.css';

function CreatePlaylist({ selectedSongs, onDeleteSong, handleSavePlaylist }) { // Receive the selectedSongs prop
  const [playlistName, setPlaylistName] = useState('');
  const handlePlaylistNameChange = (event) => {
    // Update the playlistName state when the input changes
    setPlaylistName(event.target.value);
  };
  return (
    <div className={styles.div}>
      <h1>Create your Playlist</h1>
      <form>
        <input placeholder="Name" 
               value={playlistName}
               type="text"
               onChange={handlePlaylistNameChange}/>
      </form>
      <h4>Song</h4>
      <ul>
        {selectedSongs.map((song) => (
          <li key={song.id}>
            {song.name} - {song.artist} - {song.album}
            <button onClick={() => onDeleteSong(song)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleSavePlaylist(playlistName)}>Save Playlist</button>
    </div>
  );
}

export default CreatePlaylist;