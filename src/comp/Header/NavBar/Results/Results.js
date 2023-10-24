import React,{useState} from "react";
import styles from './Results.module.css'
import songs from '../../../../utils/Local'
import { BsPlus } from "react-icons/bs";

function Results({ searchInput, onSelectSong }){
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
    const [confirmationMessage, setConfirmationMessage] = useState(''); // State for the confirmation message
    return (
        <div>
          <section className={styles.section}>
            <h1>Results for {searchInput}</h1>
            {filteredSongs.length > 0 ? (
               <div>
                   {filteredSongs.map((song) => (
                   <p key={song.id}>
                     {song.name} - {song.artist} - {song.album}
                    <div><button onClick={() => {onSelectSong(song);setConfirmationMessage(`The song has been added to the playlist`);setTimeout(() => setConfirmationMessage(''), 3000);}} className={styles.button}><BsPlus/>Add to Playlist</button></div>
                   </p>))}
               </div>
        ) : (
          <p>No results found.</p>
        )}
          {confirmationMessage && <p>{confirmationMessage}</p>}
          </section>
        </div>
    )
}

export default Results;