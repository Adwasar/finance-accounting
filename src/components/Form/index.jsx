import { useForm } from 'react-hook-form';

import styles from './Form.module.scss';

function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    alert(
      `name: ${data.name}, amount: ${data.amount}, transactionType: ${data.transactionType} date: ${data.date}`,
    );

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-block']}>
          <label htmlFor="transaction-name">Name:</label>
          <input
            {...register('name', { required: 'name is required field!' })}
            id="transaction-name"
            type="text"
          />
          {errors?.name && (
            <div className={styles.error} style={{ color: 'red' }}>
              {errors.name.message}
            </div>
          )}
        </div>
        <div className={styles['input-block']}>
          <label htmlFor="transaction-amount">Amount:</label>
          <input
            {...register('amount', { required: 'amount is required field!' })}
            id="transaction-amount"
            type="number"
          />
          {errors?.amount && (
            <div className={styles.error} style={{ color: 'red' }}>
              {errors.amount.message}
            </div>
          )}
        </div>
        <div className={styles['input-radio-block']}>
          <label htmlFor="transaction-type">Type:</label>
          <div className={styles['radio-btns']}>
            <div className={styles['radio-btn']}>
              <input
                {...register('transactionType', { required: 'please select a transaction type!' })}
                id="income"
                className={styles['transaction-type']}
                name="transactionType"
                value="income"
                type="radio"
              />
              <label htmlFor="income">income</label>
              {errors?.transactionType && (
                <div className={styles.error} style={{ color: 'red' }}>
                  {errors.transactionType.message}
                </div>
              )}
            </div>
            <div className={styles['radio-btn']}>
              <input
                {...register('transactionType', { required: 'please select a transaction type!' })}
                id="expense"
                className={styles['transaction-type']}
                name="transactionType"
                value="expense"
                type="radio"
              />
              <label htmlFor="expense">expense</label>
            </div>
          </div>
        </div>
        <div className={styles['input-block']}>
          <label htmlFor="transaction-date">Date:</label>
          <input
            {...register('date', { required: 'date is required field!' })}
            id="transaction-date"
            type="date"
          />
          {errors?.date && (
            <div className={styles.error} style={{ color: 'red' }}>
              {errors.date.message}
            </div>
          )}
        </div>
        <input className={styles['submit-btn']} type="submit" />
      </form>
    </>
  );
}

export default Form;
