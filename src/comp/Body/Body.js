import React, {useState, useCallback} from 'react';
import styles from './Body.module.css';


function Body(){
  return (
    <div className={styles.main}>
        <section className={styles.section}>
          <h1>Results</h1>
          <a href="#" className={styles.button}>
            <span className={styles.span}> Save to Spotify</span>
          </a>
        </section>
    </div>
  )
}

export default Body;