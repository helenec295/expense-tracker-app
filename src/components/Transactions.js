import React, { useState, useEffect } from 'react'
import '../App.css'
import './Transactions.css'

const TransactionCell = (props) => {
  
  return (
    <div 
      className='cell' 
      isExpense={props.payload?.type === 'EXPENSE'} 
      style={{ borderRightColor: (props.payload?.type === 'EXPENSE' ? 'red' : 'green')}}
      >
      <span>{props.payload?.desc}</span>
      <span>{props.payload?.amount}</span>
    </div>
  )
}

const Transactions = (props) => {
  const [ filterTransactions, setTxn] = useState(props.transactions);
  const [ searchText, setSearchText] = useState('');

  const filterData = () => {
     if (!searchText || !searchText.trim().length) {
      setTxn(props.transactions);
      return;
     }
     let txn = [...props.transactions];
     txn = txn.filter((payload) => 
     payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
     );
     setTxn(txn);
  }

  useEffect(() => filterData(searchText), [...props.transactions]);

  return (
    <div className='transactions component'>
        <h2>Transactions</h2>
        <div className="transactions-container">
          <input 
          placeholder='Search'
          onChange={(e) => {
            setSearchText(e.target.value);
            filterData(e.target.value);
          }}
          
          />
          
         {filterTransactions?.map((payload) => (
           <TransactionCell payload={payload} />
           )) 
          }

           
        </div>
        
    </div>
  )
}

export default Transactions