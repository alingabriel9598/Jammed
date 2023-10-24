import React from 'react';
import styles from './SideBar.module.css'
import Logo from './Logo/Logo'
import WrapBox from './WrapBox/WrapBox'

function SideBar({ onPageChange }){
    return (
        <div className={styles.SideBar}>
            <Logo />
            <WrapBox onPageChange={onPageChange}/>
        </div>
    )
}

export default SideBar;