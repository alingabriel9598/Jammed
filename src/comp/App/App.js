import React, {useState} from 'react';
import styles from'./App.module.css'
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer'

function App() {
  const [searchInput, setSearchInput] = useState(''); // State to store search input
  const [activePage, setActivePage] = useState('Home'); // State to store the active page
  const handleSearch = (input) => {
        setSearchInput(input); // Update the search input state
    }
  // Function to handle page changes
  const handlePageChange = (pageName) => {
        setActivePage(pageName);
    };
  return (
    <div className={styles.body}>
      <Header onSearch={handleSearch} onPageChange={handlePageChange}/>
      <Body searchInput={searchInput} activePage={activePage}/>
      <Footer />
    </div>
  );
}

export default App;