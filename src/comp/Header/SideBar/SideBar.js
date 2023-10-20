import React from 'react';
import styles from './SideBar.module.css'
import Logo from './Logo/Logo'
import WrapBox from './WrapBox/WrapBox'

function SideBar(){
    return (
        <div className={styles.SideBar}>
            <Logo />
            <WrapBox />
        </div>
    )
}

export default SideBar;