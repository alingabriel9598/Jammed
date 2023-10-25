import React from 'react';
import styles from './Logo.module.css';
import spotify from './spotify.png'

function Logo(){
  return (
    <div className={styles.wrapper}>
        <img className={styles.logo} src={spotify} alt="img"/>
    </div>
  )
}

export default Logo;