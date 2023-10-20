import React from 'react';
import styles from './Header.module.css';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

function Header(){
  return (
    <>
    <NavBar />
    <SideBar />
    </>
  )
}

export default Header;