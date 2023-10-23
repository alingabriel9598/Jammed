import React from 'react';
import { BiHomeSmile, BiMusic, BiPlus } from "react-icons/bi";
import styles from './WrapBox.module.css';

function WrapBox(props){
 return (
    <div className={styles.wrapbox}>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <a href="#" className={styles.a}>
                    <BiHomeSmile />
                    {props.name1}
                </a>
            </li>
            <li className={styles.li}>
                <a href="#" className={styles.a}>
                    <BiMusic />
                    {props.name2}
                </a>
            </li>
            <li className={styles.li}>
                <a href="#" className={styles.a}>
                    <BiPlus />
                    {props.name3}
                </a>
            </li>
        </ul>
    </div>
 )
}

export default WrapBox;