import React from 'react';
import styles from'./App.module.css'
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;