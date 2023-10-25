import React, { useState, useRef, useEffect } from 'react';
import styles from './SideBar.module.css';
import Logo from './Logo/Logo';
import WrapBox from './WrapBox/WrapBox';
import { BsList } from 'react-icons/bs';

function SideBar({ onPageChange }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Add a ref to the sidebar
  const sidebarRef = useRef();

  // Use useEffect to handle clicks outside the sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.className !== styles.closebtn
      ) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      // Add the event listener when the sidebar is open
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove the event listener when the sidebar is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <div
        ref={sidebarRef}
        className={`${styles.SideBar} ${isSidebarOpen ? styles.open : ''}`}>
        <Logo />
        <WrapBox onPageChange={onPageChange} />
      </div>
      <button className={styles.closebtn} onClick={toggleSidebar}>
        <BsList className={styles.iconButton}/>
      </button>
    </div>
  );
}

export default SideBar;