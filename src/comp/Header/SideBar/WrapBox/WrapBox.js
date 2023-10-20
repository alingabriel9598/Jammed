import React from 'react';
import styles from './WrapBox.module.css';

function WrapBox(){
 return (
    <div className={styles.wrapbox}>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <a href="#" className={styles.a}>
                    <i class="ti ti-world"></i>
                    My Playlist
                </a>
            </li>
            <li className={styles.li}>
                <a href="#" className={styles.a}>
                    <i class="ti ti-world"></i>
                    Favorite Songs
                </a>
            </li>
            <li className={styles.li}>
                <a href="#" className={styles.a}>
                    <i class="ti ti-world"></i>
                    Create Playlist
                </a>
            </li>
        </ul>
    </div>
 )
}

export default WrapBox;