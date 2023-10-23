import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu(props){
    return (
        <>
          <a href="#" className={styles.a}>{props.name1}</a>
          <a href="#" className={styles.a}>{props.name2}</a>
          <a href="#" className={styles.a}>{props.name3}</a>
        </>
    )
}

export default NavMenu;