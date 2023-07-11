import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import Context from './context';
import router from './routing';
import './index.scss';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log(transactions);
  }, [transactions, setTransactions]);

  return (
    <Context.Provider value={{ transactions, setTransactions }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
