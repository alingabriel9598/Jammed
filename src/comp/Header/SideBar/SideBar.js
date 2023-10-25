import React, { useState } from 'react';
import styles from './SideBar.module.css';
import Logo from './Logo/Logo';
import WrapBox from './WrapBox/WrapBox';
import { BsList } from 'react-icons/bs';

function SideBar({ onPageChange }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`${styles.SideBar} ${isSidebarOpen ? styles.open : ''}`}>
        <Logo />
        <WrapBox onPageChange={onPageChange} />
      </div>
      <div className={styles.closebtn} onClick={toggleSidebar}>
        <BsList />
      </div>
    </div>
  );
}

export default SideBar;