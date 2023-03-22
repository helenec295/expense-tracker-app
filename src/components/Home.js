import React, { useState, useEffect } from "react"
import './Home.css'
import '../App.css'
import Overview from './Overview'
import Transactions from './Transactions'


const Home = (props) => {
    const [transactions, setTransactions] = useState([]);
    const [expense, setExpense] = useState([0]);
    const [income, setIncome] = useState([0]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        setTransactions(transactionArray);

    }

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) => {
            payload.type === 'EXPENSE' ? 
            (exp = exp + payload.amount) : 
            (inc = inc + payload.amount);
        })
        setExpense(exp);
        setIncome(inc);
    }

    useEffect(() => calculateBalance(), [transactions])

    return (
        <div className='home container'>
            Home
            <Overview 
            addTransaction={addTransaction} 
            expense={expense} 
            income={income}
            />
            <Transactions transactions={transactions} />
        </div>
    )

}

export default Home