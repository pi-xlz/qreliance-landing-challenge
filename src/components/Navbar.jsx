// other
import { useState } from 'react';

// styles
import styles from './Navbar.module.css';

// lib imports
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuStyles = isMenuOpen
    ? `${styles.backdrop} ${styles.show}`
    : `${styles.backdrop}`;
  return (
    <nav className={styles.navbar}>
      <h2 className={`${styles.logo} heading`}>QS.</h2>
      <ul className={styles['navbar-links']}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>

      <Bars2Icon
        className={styles['menu-icon']}
        onClick={() => setIsMenuOpen((p) => !p)}
        width={24}
        height={24}
      />
      {isMenuOpen && (
        <div className={mobileMenuStyles}>
          <ul className={styles['mobile-menu']}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>

          <div className={styles['close-icon']}>
            <XMarkIcon
              onClick={() => setIsMenuOpen((p) => !p)}
              width={24}
              height={24}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
