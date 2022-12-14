import React, {useState, useContext} from 'react';
// import { GlobalContext } from '../context/GlobalState';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {

    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit= e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
         addTransaction(newTransaction);

    }


    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>{setText(e.target.value)}
                }   />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount 
                    <br />
                    (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}   placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>

        </div>
    )
}