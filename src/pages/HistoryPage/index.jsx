import styles from './HistoryPage.module.scss';

function SecondPage(props) {
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
            <tr>
              <td>salary</td>
              <td>30000</td>
              <td>income</td>
              <td>21.07.2023</td>
              <td>
                <img src="/icons/edit.svg" alt="#" />
              </td>
              <td>
                <img src="/icons/delete.svg" alt="#" />
              </td>
            </tr>
            <tr>
              <td>salary</td>
              <td>30000</td>
              <td>income</td>
              <td>21.07.2023</td>
              <td>
                <img src="/icons/edit.svg" alt="#" />
              </td>
              <td>
                <img src="/icons/delete.svg" alt="#" />
              </td>
            </tr>
            <tr>
              <td>salary</td>
              <td>30000</td>
              <td>income</td>
              <td>21.07.2023</td>
              <td>
                <img className={styles.edit} src="/icons/edit.svg" alt="#" />
              </td>
              <td>
                <img className={styles.delete} src="/icons/delete.svg" alt="#" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SecondPage;
