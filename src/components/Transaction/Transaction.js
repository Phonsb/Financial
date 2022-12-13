import React, { useEffect, useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'
import "./Transaction.css"
import Income from './Income'
import Expense from './Expense'
import { useLocation } from 'react-router-dom'

const Transaction = () => {
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    const [rSelected, setRSelected] = useState(1);
    const selectab = () => {
        if (rSelected == 1)
            return <Income />
        else
            return <Expense />
    }
    useEffect(() => {
        const params = searchParams.get('m')
        if (params) {
            setRSelected(parseInt(params))
        }
    }, [])
    return (
        <div className="form-wrapper container header-box pb-5">
            <div className='d-flex justify-content-between'>
            <h1 classNames='font-weight-bold' style={{ margin: 0 }}>Transaction</h1>
            <ButtonGroup>
                <Button className="text-light" color={rSelected === 1 ? "primary" : "secondary"} onClick={() => setRSelected(1)} active={rSelected === 1}>Income</Button>
                <Button color={rSelected === 2 ? "danger" : "secondary"} onClick={() => setRSelected(2)} active={rSelected === 2} >Expense</Button>
            </ButtonGroup>
            </div>
          
            <div className="header-box">
                {selectab()}
            </div>
        </div >
    )
}
export default Transaction;