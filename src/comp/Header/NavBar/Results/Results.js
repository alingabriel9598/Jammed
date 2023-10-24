import React from "react";
import styles from './Results.module.css'

function Results({ searchInput }){
    return (
        <div>
          <section className={styles.section}>
            <h1>Results for {searchInput}</h1>
            <a href="#" className={styles.button}>
              <span className={styles.span}> Save to Spotify</span>
            </a>
          </section>
        </div>
    )
}

export default Results;