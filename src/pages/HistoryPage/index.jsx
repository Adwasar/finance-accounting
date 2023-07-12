import React, { useContext } from 'react';

import styles from './HistoryPage.module.scss';
import Context from '../../context';

function SecondPage(props) {
  const { transactions, setTransactions } = useContext(Context);

  const deleteTransaction = (el) => {
    setTransactions(transactions.filter((transaction) => el !== transaction));
    console.log(el);
  };

  return (
    <div className="container">
      <h1 className={styles['history-title']}>History</h1>
      <div className={styles.history}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((el, i) => {
              return (
                <tr key={i}>
                  <td style={el.type === 'income' ? { color: 'green' } : { color: 'red' }}>
                    {el.amount} ₴
                  </td>
                  <td>{el.name}</td>
                  <td>{el.date}</td>
                  <td>
                    <img src="/icons/edit.svg" alt="#" />
                  </td>
                  <td>
                    <img onClick={() => deleteTransaction(el)} src="/icons/delete.svg" alt="#" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SecondPage;
