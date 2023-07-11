import styles from './Form.module.scss';

function Form(props) {
  return (
    <form className={styles.form}>
      <div className={styles['input-block']}>
        <label htmlFor="transaction-name">Transaction name:</label>
        <input id="transaction-name" type="text" />
      </div>
      <div className={styles['input-block']}>
        <label htmlFor="transaction-amount">Transaction amount:</label>
        <input id="transaction-amount" type="number" />
      </div>
      <div className={styles['input-block']}>
        <label htmlFor="transaction-date">Transaction date:</label>
        <input id="transaction-date" type="date" />
      </div>
      <input className={styles['submit-btn']} type="submit" />
    </form>
  );
}

export default Form;
