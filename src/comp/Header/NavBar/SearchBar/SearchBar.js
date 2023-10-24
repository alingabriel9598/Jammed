import React, {useState, useCallback} from 'react';
import { BiSearch } from "react-icons/bi";
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInput(value);
        
    }
    const search = () => {
        props.onSearch(input);
        }

    return (
        <form className={styles.form}>
            <button className={styles.button} 
                    onClick={search}>
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