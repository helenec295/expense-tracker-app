import React, { useState } from "react"
import '../App.css'
import './Overview.css'

// const addTransactionContainer = () => {
//     return (
//        <div className='add-transaction-container component'>
        
//        </div>
//     )
// }

const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState('EXPENSE');

    const addTransaction = () => {
        props.addTransaction({ 
            amount:Number(amount), 
            desc, 
            type, 
            id:Date.now(),
        });
        console.log({ amount, desc, type});
        props.toggleAddTxn();
    }

    return (
       <div className='add-transaction-container'>
            <input 
            placeholder="Amount" 
            value={amount}
            type='number'
            onChange={(e) => setAmount(e.target.value)}            
            /> 
            <input 
            placeholder="Description" 
            value={desc}
            onChange={(e) => setDesc(e.target.value)}  
            /> 
            <div className="radio-box">
                <input 
                type='radio' 
                id='expense' 
                name='type' 
                value='EXPENSE' 
                checked={type==='EXPENSE'} 
                onChange={(e) => setType(e.target.value)} 
                />   
                <label htmlFor="expense">Expense</label>
                <input 
                type='radio' 
                id='income' 
                name='type' 
                value='INCOME' 
                checked={type==='INCOME'}
                onChange={(e) => setType(e.target.value)}   
                />   
                <label htmlFor="income">Income</label>
            </div>
            <button onClick={addTransaction}>Add Transaction</button>         
       </div>
    )
}

const Overview = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false);

  return (
    <div className='overview component'>
        <h2>Overview</h2>
        <div className="balance-box">
            Balance: 
            <span style={{ color: ((props.income - props.expense > 0) ? 'green' : 'red')}}>
                ${props.income - props.expense}
            </span>
           
            <button
                onClick={()=>toggleAddTxn(!isAddTxnVisible)}
            > { isAddTxnVisible ? 'Cancel' : 'Add' } </button>
        </div>
        { isAddTxnVisible && (
        <AddTransactionView 
        toggleAddTxn={toggleAddTxn} 
        addTransaction={props.addTransaction} 
        />
        )}
        <div className="expense-container">
            <div className="expense-box" isIncome={false}>
                Expense <span>${props.expense}</span>
            </div>
            <div className="income-box" isIncome={true}>
                Income <span>${props.income}</span>
            </div>

        </div>

    </div>
  )
}

export default Overview