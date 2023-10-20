import logo from './logo.svg';
import styles from'./App.module.css'


function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Site in Construction
        </p>
      </header>
    </div>
  );
}

export default App;