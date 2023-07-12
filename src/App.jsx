import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import Context from './context';
import router from './routing';
import './index.scss';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(transactions.reduce((acc, el) => acc + +el.amount, 0));
  }, [transactions, setTransactions, balance]);

  return (
    <Context.Provider value={{ transactions, setTransactions, balance }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
