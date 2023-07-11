import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={`${styles['header-container']} container`}>
        <Link to="/">
          <div className={styles.logo}>Logo</div>
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles['navigation-list']}>
            <li className={styles['list-item']}>
              <NavLink to="/">Create transaction</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
          </ul>
        </nav>
        <span>balance: 23400 ₴</span>
      </div>
    </header>
  );
}

export default Header;
