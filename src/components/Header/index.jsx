import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

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
              <Link>First page</Link>
            </li>
            <li>
              <Link to="/second-page">Second page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
