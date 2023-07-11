import React, { useContext } from 'react';

import styles from './HistoryPage.module.scss';
import Context from '../../context';

function SecondPage(props) {
  const { transactions } = useContext(Context);

  return (
    <div className="container">
      <h1 className={styles['history-title']}>History</h1>
      <div className={styles.history}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{el.name}</td>
                  <td>{el.amount}</td>
                  <td>{el.type}</td>
                  <td>{el.date}</td>
                  <td>
                    <img src="/icons/edit.svg" alt="#" />
                  </td>
                  <td>
                    <img src="/icons/delete.svg" alt="#" />
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
