import React from 'react';
import styles from './index.module.scss';



export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.items}>
                <li><a href="#header">Home</a>
                </li>
                <li><a href="#about">About</a>
                </li>
                <li><a href="#projects">Projects</a>
                </li>
                <li><a href="#footer">Contact</a>
                </li>
            </div>
        </div>
    );
}
