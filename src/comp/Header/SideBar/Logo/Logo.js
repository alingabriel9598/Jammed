import React from 'react';
import styles from './Logo.module.css';
import logo192 from './logo192.png'

function Logo(){
  return (
    <div className={styles.wrapper}>
        <img className={styles.logo} src={logo192} alt="img"/>
    </div>
  )
}

export default Logo;