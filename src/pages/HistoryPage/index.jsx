import React, { useContext, useState } from 'react';

import EditFrom from '../../components/editForm';

import styles from './HistoryPage.module.scss';
import Context from '../../context';

function SecondPage(props) {
  const { transactions, setTransactions } = useContext(Context);

  const [editFormActive, setEditFormActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const editRow = (el) => {
    setEditFormActive(true);
    setSelectedElement(el);
  };

  const deleteTransaction = (el) => {
    setTransactions(transactions.filter((transaction) => el !== transaction));
    console.log(el);
  };

  return (
    <>
      <div className="container">
        <h1 className={styles['history-title']}>History</h1>
        <div className={styles.wrapper}>
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
                {transactions
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .map((el, i) => {
                    return (
                      <tr key={i}>
                        <td style={+el.amount > 0 ? { color: 'green' } : { color: 'red' }}>
                          {el.amount} ₴
                        </td>
                        <td>{el.name}</td>
                        <td>{el.date}</td>
                        <td>
                          <img onClick={() => editRow(el)} src="/icons/edit.svg" alt="#" />
                        </td>
                        <td>
                          <img
                            onClick={() => deleteTransaction(el)}
                            src="/icons/delete.svg"
                            alt="#"
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className={styles.total}>
              <p>
                Total income:
                <span style={{ color: 'green' }}>
                  {transactions
                    .filter((el) => el.amount >= 0)
                    .reduce((acc, el) => acc + el.amount, 0)}
                  ₴
                </span>
              </p>
              <p>
                Total expenses:
                <span style={{ color: 'red' }}>
                  {transactions
                    .filter((el) => el.amount < 0)
                    .reduce((acc, el) => acc + el.amount, 0)}
                  ₴
                </span>
              </p>
            </div>
          </div>
          {editFormActive ? (
            <EditFrom
              editFormActive={editFormActive}
              selectedElement={selectedElement}
              setEditFormActive={setEditFormActive}
              name={selectedElement.name}
              amount={selectedElement.amount}
              type={selectedElement.type}
              date={selectedElement.date}
              setTransactions={setTransactions}
              transactions={transactions}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SecondPage;
