import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import NavMenu from './NavMenu/NavMenu';
import styles from './NavBar.module.css';

function NavBar(){
  return (
    <div className={styles.div}>
        <ul className={styles.ul}>
            <li className={styles.li}> 
              <SearchBar />
            </li>
            <li className={styles.li}>
                <NavMenu name1="Genres"/>
            </li>
            <li className={styles.li}>
                <NavMenu name2="Trending"/>
            </li>
            <li className={styles.li}> 
                <NavMenu name2="Popular"/>
            </li> 
        </ul>
    </div>
  )
}

export default NavBar;