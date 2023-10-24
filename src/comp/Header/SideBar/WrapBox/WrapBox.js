import React from 'react';
import { BiHomeSmile, BiMusic, BiPlus } from "react-icons/bi";
import styles from './WrapBox.module.css';

function WrapBox({ onPageChange }){
    const handleLinkClick = (pageName, event) => {
        event.preventDefault();
        onPageChange(pageName); // Call onPageChange to update the active page
    };
 return (
    <div className={styles.wrapbox}>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <a href="/" className={styles.a} onClick={(e) => handleLinkClick('Home', e)}>
                    <BiHomeSmile />
                    Home
                </a>
            </li>
            <li className={styles.li}>
                <a href="/" className={styles.a} onClick={(e) => handleLinkClick('FavSongs', e)}>
                    <BiMusic />
                    Favorite Songs
                </a>
            </li>
            <li className={styles.li}>
                <a href="/" className={styles.a} onClick={(e) => handleLinkClick('MyPlaylist', e)}>
                    <BiPlus />
                    My Playlist
                </a>
            </li>
            <li className={styles.li}>
                <a href="/" className={styles.a} onClick={(e) => handleLinkClick('CreatePlaylist', e)}>
                    <BiPlus />
                    Create Playlist
                </a>
            </li>
        </ul>
    </div>
 )
}

export default WrapBox;