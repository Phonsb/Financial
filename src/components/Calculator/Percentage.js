import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'

const Percentage = () => {
    const [detailData, setDetailData] = useState({
        price: 0,
        discount: 0
    })
    const [dprice, setDprice] = useState("")
    const [total, setTotal] = useState("")
    const cal = () =>{
        let dp=0;
        let tt=0
        dp = (detailData.price*detailData.discount)/100;
        tt= detailData.price-((detailData.price*detailData.discount)/100);
        setDprice(dp)
        setTotal(tt)
    }
    const reset = () => {
        setDetailData({
        price: 0,
        discount: 0,
        })
        setDprice()
        setTotal()
    }

    return (
        <div className="header-box mt-3 card-box p-3 shadow">
        <h3 className='text-primary'>Percentage</h3>
        <div className="row d-flex justify-content-center">
            <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Full Price</label></div>
            <div className="col-md-3 "><Input
                type="text"
                name="number"
                onChange={(v)=> setDetailData({...detailData, price: +v.target.value})}
                id="amount-in"
                placeholder="How much?"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-1 mt-3"><label className="d-flex justify-content-end">Discount</label></div>
            <div className="col-md-3 mt-3 "><Input
                type="text"
                name="number"
                onChange={(v)=> setDetailData({...detailData, discount: +v.target.value})}
                id="amount-in"
                placeholder="%"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center gap-2 mt-2 mb-2">
            <Button className="btn bg-danger text-light mt-2 p-2 button-income  justify-content-center" color="danger" onClick={() => reset()}>Reset</Button>
            <Button className="btn bg-success text-light mt-2 p-2 button-income  justify-content-center" color="success" onClick={() => cal()}>Calculate</Button>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Discount Price:</label></div>
            <div className="col-md-3 mt-4 ">{dprice}</div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 mt-3"><label className="d-flex justify-content-end">Total Price After Discount:</label></div>
            <div className="col-md-3 mt-4 ">{total}</div>
        </div>
        
    </div>
    )
}
export default Percentage;