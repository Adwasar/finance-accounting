import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import Context from './context';
import router from './routing';
import './index.scss';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const sortByDate = (data) => {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  useEffect(() => {
    setBalance(transactions.reduce((acc, el) => acc + +el.amount, 0));
  }, [transactions, setTransactions, balance]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    setTransactions(JSON.parse(storedTransactions));
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Context.Provider value={{ transactions, setTransactions, balance, sortByDate }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
