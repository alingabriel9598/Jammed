import React, {useState} from 'react';
import { BiSearch } from "react-icons/bi";
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInput(value);
        props.onSearch(value)
        
    }
    const handleSearch = (event) => {
        event.preventDefault();
        // Pass the input value to the parent component for searching
        props.onSearch(input);
        // Clear the search input after searching
        setInput('');
      }
    return (
        <form className={styles.form}>
            <button className={styles.button} onClick={handleSearch}>
                    <BiSearch/>
            </button>
            <input className={styles.input}
                   type="text" 
                   placeholder="Search songs, podcasts, albums..." 
                   value={input} 
                   onChange={handleChange}/>
        </form>
    )
}

export default SearchBar;