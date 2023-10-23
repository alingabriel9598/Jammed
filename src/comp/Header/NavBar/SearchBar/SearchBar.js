import React, {useState} from 'react';
import { BiSearch } from "react-icons/bi";
import styles from './SearchBar.module.css'

function SearchBar() {
    const [input, setInput] = useState('');
    const handlerSubmit = (event) => {
        event.preventDefault();
       alert(input)
    }
    const handlerChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <form className={styles.form} onSubmit={handlerSubmit}>
            <button className={styles.button} type="submit"><BiSearch/></button>
            <input className={styles.input} type="text" placeholder="Search songs, podcasts, albums..." value={input} onChange={handlerChange}/>
        </form>
    )
}

export default SearchBar;