import React from 'react';
import styles from './Header.module.css';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

function Header(){
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.flex}>
        <SideBar />
        <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Header;