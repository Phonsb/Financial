import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'
import "./Transaction.css"
import Income from './Income'
import Expense from './Expense'


const Transaction = () => {
    const [rSelected, setRSelected] = useState(1);
    const selectab = () => {
        if (rSelected == 1)
            return <Income />
        else
            return <Expense />
    }
    return (
        <div className="form-wrapper container header-box ">
            <h1>Transaction</h1>
            <ButtonGroup>
                <Button className="text-light" color="info" onClick={() => setRSelected(1)} active={rSelected === 1}>Income</Button>
                <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2} >Expense</Button>
            </ButtonGroup>
            <div className="header-box">
                {selectab()}
            </div>
        </div >
    )
}
export default Transaction;