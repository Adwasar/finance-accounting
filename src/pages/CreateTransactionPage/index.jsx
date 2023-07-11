import Form from '../../components/Form';

import styles from './CreateTransactionPage.module.scss';

function FirstPage(props) {
  return (
    <div className="container">
      <h1 className={styles['form-title']}>Create transaction</h1>
      <Form />
    </div>
  );
}

export default FirstPage;
