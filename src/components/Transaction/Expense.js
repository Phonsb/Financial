import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'
import "./Transaction.css"
import { getDatabase, ref, set } from "@firebase/database";

const Expense = () => {
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

    const addExpense = () => {
        const db = getDatabase()
        set(
            ref(db, `expense/${date}`), {
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
            <h3>Expense</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Date</label></div>
                <div className="col-md-3"><Input className="btn border col-md-2" type="datetime-local" id="birthdaytime" name="birthdaytime" onChange={handleOnChangeDate} value={date}></Input> </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Category</label></div>
                <div className="col-md-3"><Input type="select" name="Category" id="category-in" onChange={handleOnChangeCategory} value={category}>
                    <option>-Please select-</option>
                    <option>🍽 Food</option>
                    <option>🚕 Transport</option>
                    <option>🤵 Service</option>
                    <option>👪 Family</option>
                    <option>🚑 Cure</option>
                    <option>🐶 Pet</option>
                    <option>🛍 Shopping</option>
                    <option>🏠️ Accommodation</option>
                    <option>💸 Refund</option>
                    <option>🤝 Donate</option>
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
                <Button className="btn bg-primary text-light mt-2 p-2 button-income  justify-content-center" color="info" onClick={addExpense}>Save</Button>{' '}
            </div>
        </div>
    )
}
export default Expense;