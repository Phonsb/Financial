import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'

const Loan = () => {
    const [detailData, setDetailData] = useState({
        amount: 0,
        Rate: 0,
        years: 0
    })




    return (
        <div className="header-box mt-3 card-box p-3 shadow">
        <h3>Loan</h3>
        <div className="row d-flex justify-content-center">
            <div className="col-md-2 mt-1"><label className="d-flex justify-content-end">Loan Amount</label></div>
            <div className="col-md-3  "><Input
                type="text"
                name="number"
                onChange={(v)=> setDetailData({...detailData, amount: +v.target.value})}
                id="amount-in"
                placeholder="How much?"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-2 mt-3"><label className="d-flex justify-content-end">Interrest Rate</label></div>
            <div className="col-md-3 mt-3 "><Input
                type="text"
                name="number"
                onChange={(v)=> setDetailData({...detailData, rate: +v.target.value})}
                id="amount-in"
                placeholder="% per year"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center mt-2">
            <div className="col-md-2 mt-1"><label className="d-flex justify-content-end">Loan Term</label></div>
            <div className="col-md-3 "><Input
                type="text"
                name="number"
                onChange={(v)=> setDetailData({...detailData, years: +v.target.value})}
                id="amount-in"
                placeholder="Years"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center gap-2 mt-2 mb-2">
            <Button className="btn bg-danger text-light mt-2 p-2 button-income  justify-content-center" color="danger">Reset</Button>
            <Button className="btn bg-success text-light mt-2 p-2 button-income  justify-content-center" color="success">Calculate</Button>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Monthly Payment:</label></div>
            <div className="col-md-3 mt-4 ">000</div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Total Payment:</label></div>
            <div className="col-md-3 mt-4 ">000</div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Total Interest:</label></div>
            <div className="col-md-3 mt-4 ">000</div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Annual Payment:</label></div>
            <div className="col-md-3 mt-4 ">000</div>
        </div>
    </div>
    )
}
export default Loan;