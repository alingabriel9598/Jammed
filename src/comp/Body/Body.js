import React, {useState, useCallback} from 'react';
import styles from './Body.module.css';
import Home from './Pages/Home/Home'
import SearchBar from '../Header/NavBar/SearchBar/SearchBar';
import Results from '../Header/NavBar/Results/Results'


function Body(){
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (input) => {
    setSearchInput(input);
  };
  return (
    <div className={styles.main}>
        <Home />
        <Results onSearch={handleSearch} searchInput={searchInput} />
    </div>
  )
}

export default Body;