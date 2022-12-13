import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'
import "../../App.css"

const Credit = () => {
    const [detailData, setDetailData] = useState({
        balance: 0,
        rate: 0,
        desmonth: 0
    })
    const [totalinter, setTotalInter] = useState("")
    const [totalpay, setTotalPay] = useState("")
    const [totaltake, setTake] = useState("")
    const cal = () => {
        let ti = 0;
        let tp = 0;
        let ym = 0.083333;
        let m = 0;
        let sum = 0;
        let r = detailData.rate / 100;
        m = (detailData.desmonth * ym);
        ti = (detailData.balance * r) * m.toFixed(2);
        tp = (detailData.balance + ti).toFixed(2);
        sum = (tp / detailData.desmonth).toFixed(2);
        setTotalInter(ti)
        setTotalPay(tp)
        setTake(sum)
    }

    const reset = () => {
        setDetailData({
            balance: 0,
            rate: 0,
            desmonth: 0
        })
        setTotalInter()
        setTotalPay()
        setTake()
    }



    return (
        <div className="header-box mt-3 card-box p-3 shadow">

            <h3 className='text-danger'>Credit Card</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 mt-1"><label className="d-flex justify-content-end">Credit Card Balance</label></div>
                <div className="col-md-3 "><Input
                    type="text"
                    name="number"
                    onChange={(v) => setDetailData({ ...detailData, balance: +v.target.value })}
                    id="amount-in"
                    placeholder="How much?"></Input>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 mt-3"><label className="d-flex justify-content-end">Annual Interest Rate</label></div>
                <div className="col-md-3 mt-3 "><Input
                    type="text"
                    name="number"
                    onChange={(v) => setDetailData({ ...detailData, rate: +v.target.value })}
                    id="amount-in"
                    placeholder="%"></Input>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-2 mt-1"><label className="d-flex justify-content-end">Desired Month Until Debt Free</label></div>
                <div className="col-md-3 mt-3 "><Input
                    type="text"
                    name="number"
                    onChange={(v) => setDetailData({ ...detailData, desmonth: +v.target.value })}
                    id="amount-in"
                    placeholder="How many months?"></Input>
                </div>
            </div>
            <div>
            </div>
            <div className="row d-flex justify-content-center mt-2 mb-2 gap-2">
                <Button className="btn bg-danger text-light mt-2 p-2 button-income  justify-content-center" color="danger" onClick={() => reset()}>Reset</Button>
                <Button className="btn bg-success text-light mt-2 p-2 button-income  justify-content-center" color="success" onClick={() => cal()}>Calculate</Button>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Total Interest:</label></div>
                <div className="col-md-3 mt-4 ">{totalinter}</div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Total Payment:</label></div>
                <div className="col-md-3 mt-4 ">{totalpay}</div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 mt-3">
                    <span>It will take you </span>
                    <span>{totaltake}</span>
                    <span> every month to pay off your credit card debt.</span>
                </div>

            </div>

        </div>
    )
}
export default Credit;