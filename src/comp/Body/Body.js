import React from 'react';
import styles from './Body.module.css';
import Home from './Pages/Home/Home'
import Results from '../Header/NavBar/Results/Results'
import FavSongs from './Pages/FavSongs/FavSongs';
import CreatePlaylist from './Pages/CreatePlaylist/CreatePlaylist';
import MyPlaylist from './Pages/MyPlaylist/MyPlaylist';


function Body({ searchInput, activePage }){
  // Check if searchInput is not empty
  const isSearchInputEmpty = searchInput.trim() === '';
  return (
    <div className={styles.main}>
        {activePage === 'Home' && (!isSearchInputEmpty ? '' : <Home />)}
        {activePage === 'FavSongs' && <FavSongs />}
        {activePage === 'MyPlaylist' && <MyPlaylist />}
        {activePage === 'CreatePlaylist' && <CreatePlaylist />}
        {!isSearchInputEmpty && <Results searchInput={searchInput} />}
    </div>
  )
}

export default Body;