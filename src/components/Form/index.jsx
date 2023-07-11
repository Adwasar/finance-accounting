import styles from './Form.module.scss';

function Form(props) {
  return (
    <form className={styles.form}>
      <div className={styles['input-block']}>
        <label htmlFor="transaction-name">Name:</label>
        <input id="transaction-name" type="text" />
      </div>
      <div className={styles['input-block']}>
        <label htmlFor="transaction-amount">Amount:</label>
        <input id="transaction-amount" type="number" />
      </div>
      <div className={styles['input-block']}>
        <label htmlFor="transaction-date">Date:</label>
        <input id="transaction-date" type="date" />
      </div>
      <div className={styles['input-radio-block']}>
        <label htmlFor="transaction-type">Type:</label>
        <div className={styles['radio-btn']}>
          <input className={styles['transaction-type']} name="transaction-type" type="radio" />
          <span>income</span>
        </div>
        <div className={styles['radio-btn']}>
          <input className={styles['transaction-type']} name="transaction-type" type="radio" />
          <span>expense</span>
        </div>
      </div>
      <input className={styles['submit-btn']} type="submit" />
    </form>
  );
}

export default Form;
