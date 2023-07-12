import styles from './NotFoundPage.module.scss';

import Header from '../../components/Header';

function NotFoundPage(props) {
  return (
    <div className="wrapper">
      <Header />
      <h1 className={styles.title}>Sorry, page not found</h1>
    </div>
  );
}

export default NotFoundPage;
