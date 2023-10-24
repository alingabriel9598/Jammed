import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import {NavMenu1, NavMenu2, NavMenu3} from './NavMenu/NavMenu';
import styles from './NavBar.module.css';

function NavBar(){
  return (
    <div className={styles.div}>
        <ul className={styles.ul}>
            <li className={styles.li}> 
              <SearchBar />
            </li>
            <li className={styles.li}>
                <NavMenu1 name="Genres"/>
            </li>
            <li className={styles.li}>
                <NavMenu2 name="Trending"/>
            </li>
            <li className={styles.li}> 
                <NavMenu3 name="Popular"/>
            </li> 
        </ul>
    </div>
  )
}

export default NavBar;