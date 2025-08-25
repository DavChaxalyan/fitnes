import { useState } from 'react';
import styles from './Header.module.css';
import classNames from 'classnames';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoFit}>Fit</span>
        <span className={styles.logoPulse}>Pulse</span>
      </div>

      <nav
        className={classNames(styles.nav, {
          [styles.open]: menuOpen,
        })}
      >
        <ul className={styles.navList}>
          <li><a href="#">Home</a></li>
          <span></span>
          <li><a href="#">About</a></li>
          <span></span>
          <li><a href="#">Services</a></li>
          <span></span>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>

      <div className={styles.burger} onClick={toggleMenu}>
        {menuOpen ? (
            <span className={styles.closeIcon}>✕</span>
        ) : (
            <>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            </>
        )}
      </div>
    </header>
  );
}
