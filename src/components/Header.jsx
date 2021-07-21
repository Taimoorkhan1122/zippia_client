import React from 'react'
import styles from './header.module.css';
import logo from './logo_white.svg';

const Header = () => {
    return (
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>My jobs</li>
            <li>Career Search</li>
            <li>my zippia</li>
          </ul>
        </nav>
      </div>
    );
}

export default Header
