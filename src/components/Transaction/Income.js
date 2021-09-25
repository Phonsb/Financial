import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'
import "./Transaction.css"
import { getDatabase, ref, set } from "@firebase/database";

const Income = () => {
    const [date, setdate] = useState('')
    const [category, setcategory] = useState('')
    const [detail, setdetail] = useState('')
    const [amount, setamount] = useState('')

    const handleOnChangeDate = (e) => {
        setdate(e.target.value)
    }

    const handleOnChangeCategory = (e) => {
        setcategory(e.target.value)
    }

    const handleOnChangeDetail = (e) => {
        setdetail(e.target.value)
    }

    const handleOnChangeAmount = (e) => {
        setamount(e.target.value)
    }

    const addIncome = () => {
        const db = getDatabase()
        set(
            ref(db, `income/${date}`), {
            date,
            category,
            detail,
            amount
        }
        )
        setdate('')
        setcategory('')
        setdetail('')
        setamount(0)
    }

    return (
        <div className="header-box mt-3 card-box">
            <h3>Income</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Date</label></div>
                <div className="col-md-3"><Input className="btn border col-md-2" type="datetime-local" id="birthdaytime" name="birthdaytime" onChange={handleOnChangeDate} value={date}></Input> </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Category</label></div>
                <div className="col-md-3"><Input type="select" name="Category" id="category-in" onChange={handleOnChangeCategory} value={category}>
                    <option>-Please select-</option>
                    <option>💰 Revenue</option>
                    <option>💵 Business income</option>
                    <option>💸 Refund</option>
                    <option>🧾 Borrow</option>
                    <option>🪙 Special</option>
                    <option>🎁 Free</option>
                    <option>📝 Other</option>
                </Input>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-1 mt-1 "><label className="d-flex justify-content-end">Detail</label></div>
                <div className="col-md-3"><Input type="textarea" name="text" id="Detail-in" placeholder="Explain in your detail" onChange={handleOnChangeDetail} value={detail}></Input> </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Amount</label></div>
                <div className="col-md-3 "><Input
                    type="text"
                    name="number"
                    id="amount-in"
                    placeholder="How much?"
                    onChange={handleOnChangeAmount} value={amount}></Input>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-2 mb-2">
                <Button className="btn bg-info text-light mt-2 p-2 button-income  justify-content-center" color="info " onClick={addIncome}>Save</Button>
            </div>

        </div>
    )
}
export default Income;