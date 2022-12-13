import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./Planning.css"
import { getDatabase, ref, set } from "@firebase/database";
import { useHistory } from 'react-router-dom'

const Planning = () => {
    const history = useHistory()
    const [toppic, settoppic] = useState('')
    const [date, setdate] = useState('')
    const [type, settype] = useState('')
    const [detail, setdetail] = useState('')
    const [amount, setamount] = useState('')
    const handleOnChangeToppic = (e) => {
        settoppic(e.target.value)
    }

    const handleOnChangeDate = (e) => {
        setdate(e.target.value)
    }

    const handleOnChangeType = (e) => {
        settype(e.target.value)
    }

    const handleOnChangeDetail = (e) => {
        setdetail(e.target.value)
    }

    const handleOnChangeAmount = (e) => {
        setamount(e.target.value)
    }

    const addPlanning = () => {
        if (toppic && date && parseFloat(amount) > 0) {
        const db = getDatabase()
        set(
            ref(db, `planning/${toppic}`), {
            toppic,
            date,
            type,
            detail,
            amount
        }
        )
        history.push('/Planningresult')
    }
    }

    return (
        <div className="container header-box rounded shadow p-3">
            <h1 className=''>Money Planning</h1>
            <div className="row mt-2 text-center">
                <div className="col-md-5 mt-1"><label className="d-flex justify-content-end">Toppic</label></div>
                <div className="col-md-3 "><Input
                    type="text"
                    name="number"
                    id="amount-in"
                    placeholder="Tippic of Plananig" onChange={handleOnChangeToppic} value={toppic}>
                </Input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-5 mt-1 "><label className="d-flex justify-content-end">Date</label></div>
                <div className="col-md-3"><Input className="btn border col-md-2" type="date" id="birthday" name="birthday" onChange={handleOnChangeDate} value={date}></Input> </div>
            </div>
            <div className="row  mt-2">
                <div className="col-md-5 mt-1"><label className="d-flex justify-content-end">Date type</label></div>
                <div className="col-md-3"><Input type="select" name="Category" id="category-in" onChange={handleOnChangeType} value={type}>
                    <option>-Please select-</option>
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                </Input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-5 mt-1 "><label className="d-flex justify-content-end">Detail</label></div>
                <div className="col-md-3"><Input type="textarea" name="text" id="Detail-in" placeholder="Explain in your detail" onChange={handleOnChangeDetail} value={detail}></Input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-5 mt-1"><label className="d-flex justify-content-end">Amount</label></div>
                <div className="col-md-3 "><Input
                    type="text"
                    name="number"
                    id="amount-in"
                    placeholder="How much?" onChange={handleOnChangeAmount} value={amount}>
                </Input>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-2 mb-2">
                <Button className="btn bg-primary text-light mt-2 p-2 button-income  justify-content-center" color="info" onClick={addPlanning} >Save</Button>
            </div>
        </div>
    )
}
export default Planning;