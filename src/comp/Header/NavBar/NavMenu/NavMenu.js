import React from 'react';
import styles from './NavMenu.module.css';

export function NavMenu1(props){
    return (
        <>
          <a href="#" className={styles.a}>{props.name}</a>
        </>
    )
}

export function NavMenu2(props){
  return(
    <>
      <a href="#" className={styles.a}>{props.name}</a>
    </>
  )
}

export function NavMenu3(props){
  return(
    <>
      <a href="#" className={styles.a}>{props.name}</a>
    </>
  )
}