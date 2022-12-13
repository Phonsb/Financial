import React, { useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'



const Personal = () => {
    const [detailData, setDetailData] = useState({
        income: 0,
        expense: 0,
        deduction: 0,
        net: ""
    })

    const [tex, setTex] = useState("")
    const [level, setLevel] = useState("")

    const cal = () =>{
        let net = 0;
        net = (detailData.income-detailData.expense)-detailData.deduction;
        setDetailData({...detailData, net: ""+net})
        if(net<=150000){
            setTex(0)
            setLevel("0%")
        }else if(net <=300000){
            setTex(""+((net-150000)*0.05))
            setLevel("5%")
        }else if(net <=500000){
            setTex(""+(((net-300000)*0.10)+7500))
            setLevel("10%")
        }else if(net <=750000){
            setTex(""+(((net-500000)*0.15)+27500))
            setLevel("15%")
        }else if(net <=1000000){
            setTex(""+(((net-750000)*0.20)+65000))
            setLevel("20%")
        }else if(net <=2000000){
            setTex(""+(((net-1000000)*0.25)+115000))
            setLevel("25%")
        }else if(net <=5000000){
            setTex(""+(((net-2000000)*0.30)+365000))
            setLevel("30%")
        }else if(net >5000000){
            setTex(""+(((net-5000000)*0.35)+1265000))
            setLevel("35%")
        }
    }

    const reset = () => {
        setDetailData({
            income: 0,
            expense: 0,
            deduction: 0
        })
        setTex()
        setLevel()
    }
    const [active, setActive] = useState(1);

    const handleNextPrevClick = a => {
      setActive(a);
    };

    return (
        <div className="header-box mt-3 card-box">
        <h3>Personal Income Tax</h3>
        <div className="row d-flex justify-content-center">
            <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Income</label></div>
            <div className="col-md-3 "><Input
                type="text"
                name="number"
                id="income"
                onChange={(v)=> setDetailData({...detailData, income: +v.target.value})}
                placeholder="How much?"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-1 mt-3"><label className="d-flex justify-content-end">Expense</label></div>
            <div className="col-md-3 mt-3 "><Input
                type="text"
                name="number"
                onChange={(v)=> setDetailData({...detailData, expense: +v.target.value})}
                id="expense"
                placeholder="How much?"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center mt-2">
            <div className="col-md-1 mt-1"><label className="d-flex justify-content-end">Deduction</label></div>
            <div className="col-md-3 "><Input
                type="text"
                name="number"
                id="deduction"
                onChange={(v)=> setDetailData({...detailData, deduction: +v.target.value})}
                placeholder="How much?"></Input>
            </div>
        </div>
        <div className="row d-flex justify-content-center mt-2 mb-2">
            <Button className="btn bg-danger text-light mt-2 p-2 button-income  justify-content-center" color="danger" onClick={() => reset()}>Reset</Button>
            <Button className="btn bg-success text-light mt-2 p-2 button-income  justify-content-center" color="success" onClick={() => cal()}>Calculate</Button>
        </div>
        
        <div className="row d-flex justify-content-center">
            <div className="col-md-2 mt-3"><label className="d-flex justify-content-end">Tax Rate</label></div>
            <div className="col-md-3 mt-4 ">{level}</div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-2 mt-3"><label className="d-flex justify-content-end">Tax Payment</label></div>
            <div className="col-md-3 mt-4 ">{tex}</div>
        </div>
        
    </div>
    )
}
export default Personal;