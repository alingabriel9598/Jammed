import React, {useState, useCallback} from 'react';
import styles from './Body.module.css';
import SearchBar from '../Header/NavBar/SearchBar/SearchBar';


function Body(){
  return (
    <div className={styles.main}>
        <section className={styles.section}>
          <h1>Results</h1>
        </section>
    </div>
  )
}

export default Body;