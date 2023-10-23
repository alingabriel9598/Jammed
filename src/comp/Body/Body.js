import React from 'react';
import styles from './Body.module.css';
import NavBar, {handlerChange} from '../Header/NavBar/NavBar';


function Body(){
  return (
    <div className={styles.main}>
        <section className={styles.section}>
          <h1>Results</h1>
          <article onChange={NavBar}></article>
        </section>
    </div>
  )
}

export default Body;