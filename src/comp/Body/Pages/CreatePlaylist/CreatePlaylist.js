import React from 'react';
import styles from './CreatePlaylist.module.css';

function CreatePlaylist({ selectedSongs, onDeleteSong }) { // Receive the selectedSongs prop
  return (
    <div className={styles.div}>
      <h1>Create your Playlist</h1>
      <form>
        <input value="Name"/>
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
    </div>
  );
}

export default CreatePlaylist;