import React from 'react';
import styles from './NavBar.module.css';

function NavBar(){
  return (
    <div className={styles.div}>
        <ul className={styles.ul}>
            <li className={styles.li}> 
                <form className={styles.form}>
                    <button className={styles.button} type="submit"></button>
                    <input className={styles.input} type="text" placeholder="Search songs, podcasts, albums..."/>
                </form>
            </li>
            <li className={styles.li}>
                <a href="#" className={styles.a}>Genres</a>
            </li>
            <li className={styles.li}>
                <a href="#" className={styles.a}>Trending</a>
            </li>
            <li className={styles.li}> 
                <a href="#" className={styles.a}>Popular</a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar;