import React,{ useState } from 'react';
import styles from './Body.module.css';
import Home from './Pages/Home/Home'
import Results from '../Header/NavBar/Results/Results'
import FavSongs from './Pages/FavSongs/FavSongs';
import CreatePlaylist from './Pages/CreatePlaylist/CreatePlaylist';
import MyPlaylist from './Pages/MyPlaylist/MyPlaylist';


function Body({ searchInput, activePage }){
  // Check if searchInput is not empty
  const isSearchInputEmpty = searchInput.trim() === '';
  
  const [selectedSongs, setSelectedSongs] = useState([]);
  const handleSelectSong = (song) => {
    if (!selectedSongs.some((selectedSong) => selectedSong.id === song.id)){
    setSelectedSongs([...selectedSongs, song]);
  } else {
    // Display a message that the song is already in the playlist
    alert('This song is already in the playlist.');
  }
  };
  
  const handleDeleteSong = (song) => {
    // Filter the selected songs to remove the specified song
    const updatedSongs = selectedSongs.filter((selectedSong) => selectedSong.id !== song.id);
    setSelectedSongs(updatedSongs);
  };

  return (
    <div className={styles.main}>
        {activePage === 'Home' && (!isSearchInputEmpty ? '' : <Home />)}
        {activePage === 'FavSongs' && <FavSongs />}
        {activePage === 'MyPlaylist' && <MyPlaylist />}
        {activePage === 'CreatePlaylist' && <CreatePlaylist selectedSongs={selectedSongs} onDeleteSong={handleDeleteSong}/>}
        {!isSearchInputEmpty && <Results searchInput={searchInput} onSelectSong={handleSelectSong} />}
    </div>
  )
}

export default Body;