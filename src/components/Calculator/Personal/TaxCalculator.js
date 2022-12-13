import React, { useRef,useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';

const TaxCalculator = (props) => {

    const {fund, insurance, pvd, reFamily, residence, sumPenPvd, income} = {...props.taxObj}
    const finalIncome = () => {
        return Math.abs((income)-(fund+insurance+reFamily+residence)-100000) || 0
    }

    const numberWithComma = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    const [max, setMax] = useState(500000-fund)
    const [ssfVal, setSSFval] = useState(0);
    const [rffVal, setRFFval] = useState(0);
    const [donate1, setDonate1] = useState(0);
    const [donate2, setDonate2] = useState(0);

    const calSSF = () => {
        const taxVal = (taxTable())*0.3
        if(taxVal <= 200000){
            return taxVal
        }else {
            return 200000
        }
    }
    const calRMF = () => {
        const taxVal = (taxTable())*0.3
        if(taxVal){
            return taxVal
        }
    }

    const handleRFF = (value) => {
        const taxVal = (taxTable())*0.3
        if(value <= taxVal){
            setRFFval(value)
        }else {
            setRFFval(taxVal)
        }
    }

    const handleDonate2 = (val) => {
        const income10percent = (finalIncome())*0.1
        if(Math.exp(val) < income10percent){
            return Math.exp(val)
        }else {
            return income10percent
        }
    }
    const handleDonate1 = (val) => {
        const income10percent = (finalIncome())*0.1
        if(val < income10percent){
            return val
        }else {
            return income10percent
        }
    }

    const handleSSF = (value) =>{
        console.log({value});
        const taxVal = (taxTable())*0.3
        if(value <= taxVal && value <= 200000){
            setSSFval(value)
        }else {
            setSSFval(200000)
        }
    }

    const summary = () => {
        if((ssfVal+rffVal)<=max) return ssfVal+rffVal
        else return max
    }

    const taxTable = () =>{
        let tax = 0;
        let net = 0;
        net = finalIncome()
        if(net<=150000){
            tax = 0
        }else if(net <=300000){
            tax = ((net-150000)*0.05)
        }else if(net <=500000){
            tax = (((net-300000)*0.10)+7500)
        }else if(net <=750000){
            tax = (((net-500000)*0.15)+27500)
        }else if(net <=1000000){
            tax = (((net-750000)*0.20)+65000)
        }else if(net <=2000000){
            tax = (((net-1000000)*0.25)+115000)
        }else if(net <=5000000){
            tax = (((net-2000000)*0.30)+365000)
        }else if(net >5000000){
            tax = (((net-5000000)*0.35)+1265000)
        }
        return tax || 0
    }


    return (
        <div className="mt-3">
            <div className='row'>
                <div className='col'></div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <div className='row'>
                        <div className='col-6 text-start'>
                            <h5>รวมเงินได้สุทธิ</h5>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-6 text-end '><h5 className='text-success'>{numberWithComma(finalIncome())}</h5></div> 
                                <div className='col-6'><h5 className='text-end'>บาท</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-start'>
                            <h5 className='m-0'>ภาษีที่ต้องจ่าย</h5>
                            <small className='text-secondary'>(ก่อนลดหย่อนด้วย SSF / RMF)</small>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-6 text-end '><h5 className='text-danger'>{numberWithComma(taxTable())}</h5></div>
                                <div className='col-6'><h5 className='text-end'>บาท</h5></div>
                            </div>
                        </div>
                    </div>
                    <h4 className='text-start-bold mt-4'>ลดหย่อนภาษีกับกองทุน SSF / RMF</h4>
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4'>
                            <small>จำนวนที่คุณลงทุนได้สูงสุด (บาท)</small>
                        </div>
                        <div className='col-4'>
                            <small>จำนวนที่ต้องการจะลงทุน (บาท)</small>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-4 text-start'>ลงทุน SSF อย่างเดียว</div>
                        <div className='col-4'>
                            <h5>{numberWithComma(calSSF())}</h5>
                        </div>
                        <div className='col-4 text-end'><Input
                            type="text"
                            name="number"
                            id="income"
                            onChange={(v) => handleSSF(+v.target.value)}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-4 text-start'>ลงทุน RMF อย่างเดียว</div>
                        <div className='col-4'>
                            <h5>{numberWithComma(calRMF())}</h5>
                        </div>
                        <div className='col-4 text-end'><Input
                            type="text" 
                            name="number"
                            id="income"
                            onChange={(v)=> handleRFF(+v.target.value)}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-8 text-start'>
                            <small className='text-success'>กองทุนสำรองเลี้ยงชีพ, ประกันชีวิตบำนาญ,กองทุนออมแห่งชาติ, กองทุน ครูเอกชน
                                กองทุนบำเหน็จบำนาญข้าราชการ, SSF และ RMF รวมกันต้องไม่เกิน 500,000 บาท</small>
                        </div>
                        <div className='col-2'>
                            <h5>ลงทุนรวม</h5>
                        </div>
                        <div className='col-2 text-end'>
                            {numberWithComma(summary())}
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-4 text-start'>     </div>
                        <div className='col-4'>
                            <small>เมื่อลงทุนสูงสุด</small>
                        </div>
                        <div className='col-4 text-end'>
                            <small>เมื่อลงทุน  </small><br />
                            <small>ตามจำนวนเงินของคุณ</small>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 text-start'>
                            <h5 className='m-0'>ภาษีที่ประหยัดไปได้</h5>
                            <small>หลังลดหย่อน SSF / RMF</small>
                        </div>
                        <div className='col-4 text-danger'>
                            {numberWithComma(max*0.35)}
                        </div>
                        <div className='col-4 text-end text-success'>
                            {numberWithComma((summary())*0.35)}
                        </div>
                    </div>
                    <hr />
                    <h5 className='text-start mt-4'>เงินบริจาค</h5>
                    <div className='row'>
                        <div className='col-6 text-start'>
                            เงินบริจาคเพื่อการศึกษา การกีฬา การพัฒนาสังคม
                            และโรงพยาบาลรัฐ
                        </div>
                        <div className='col-4 text-start'>
                            เงินบริจาคทั่วไป
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'><Input
                            type="text"
                            name="number"
                            id="income"
                            onChange={(v) => {
                                const value = handleDonate2(+v.target.value)
                                setDonate2(value)
                            }}
                            placeholder="ระบุจำนวนเงิน"></Input>
                            <div className='text-start'>
                                <small className='text-success'>ลดหย่อน 2 เท่าของเงินที่จ่ายจริง แต่ไม่เกิน 10% ของเงินได้สุทธิ</small>
                            </div>
                        </div>
                        <div className='col'><Input
                            type="text"
                            name="number"
                            id="income"
                            onChange={(v) => {
                                const value = handleDonate1(+v.target.value)
                                setDonate1(value)
                            }}
                            placeholder="ระบุจำนวนเงิน"></Input>
                            <div className='text-start'>
                                <small className='text-success'>ตามที่จ่ายจริง แต่ไม่เกิน 10% ของเงินได้สุทธิ</small>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-4 text-start'>
                            เหลือภาษีที่ต้องจ่าย
                            <div className='text-start'>
                                <small className='success'>หลังลดหย่อนเงินบริจาค</small>
                            </div>
                        </div>
                        <div className='col-4 text-end text-danger'>
                            {numberWithComma(donate1+donate2)}
                        </div>
                        <div className='col-4 text-end text-success'>
                            {numberWithComma(Math.abs((taxTable())-((summary())*0.35)-(donate1+donate2)))}
                        </div>
                    </div>
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}
export default TaxCalculator;