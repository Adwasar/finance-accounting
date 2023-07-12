import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Header.module.scss';
import Context from '../../context';

function Header(props) {
  const { balance } = useContext(Context);

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
        <span style={balance > 0 ? { color: 'green' } : { color: 'red' }}>
          balance: {balance} ₴
        </span>
      </div>
    </header>
  );
}

export default Header;
