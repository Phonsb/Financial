import React, { useRef, useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'



const IncomeTex = (props) => {

    const [income, setIncome] = useState({
        salary: 0,
        bonus: 0,
        other: 0,
    })

    const salary = useRef(0)
    const bonus = useRef(0)
    const other = useRef(0)

    return (
        <div className="mt-3">
            <h4 className="mt-3">รายรับ</h4>
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 mt-2"><label className="d-flex justify-content-end">เงินเดือน</label></div>
                <div className="col-md-3 "><Input
                    onChange={(v => {
                        salary.current = +(v.target.value)
                        props.inputIncome({
                            salary: salary.current,
                            bonus: bonus.current,
                            other: other.current
                        })
                    })}
                    type="text"
                    name="number"
                    id="income"
                    defaultValue={props.income.salary ? props.income.salary : ""}
                    placeholder="เงินเดือนของคุณเดือนละ"></Input>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 mt-4"><label className="d-flex justify-content-end">โบนัส</label></div>
                <div className="col-md-3 mt-3"><Input
                   onChange={(v => {
                    bonus.current = +(v.target.value)
                    props.inputIncome({
                        salary: salary.current,
                        bonus: bonus.current,
                        other: other.current
                    })
                })}
                    type="text"
                    name="number"
                    id="expense"
                    defaultValue={props.income.bonus ? props.income.bonus : ""}
                    placeholder="ระบุโบนัสที่คุณได้รับในปี"></Input>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-2 mt-3"><label className="d-flex justify-content-end">รายได้อื่น ๆ</label></div>
                <div className="col-md-3 mt-2"><Input
                    onChange={(v => {
                        other.current = +(v.target.value)

                        props.inputIncome({
                            salary: salary.current,
                            bonus: bonus.current,
                            other: other.current
                        })
                    })}
                    type="text"
                    name="number"
                    id="deduction"
                    defaultValue={props.income.other ? props.income.other : ""}
                    placeholder="ระบุรายได้ทั้งปี"></Input>
                </div>
            </div>
        </div>
    )
}
export default IncomeTex;