import React, { useRef, useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'



const Fund = (props) => {
    const [fund, setFund] = useState({
        pensionfund: 0,
        nationalfund: 0,
        teacherfund: 0
    })

    const pensionfund = useRef(0)
    const nationalfund = useRef(0)
    const teacherfund = useRef(0)

    return (
        <div className="mt-3">
            <h4 className="mt-3">รายการลดหย่อนภาษี : กองทุนอื่นๆ</h4>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-4 mt-3"><label className="d-flex justify-content-end">กองทุนบำเหน็จบำนาญข้าราชการ (กบข.)</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                pensionfund.current = v.target.value
                                props.inputFund({
                                    pensionfund: pensionfund.current,
                                    nationalfund: nationalfund.current,
                                    teacherfund: teacherfund.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.fund.pensionfund ? props.fund.pensionfund : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            ไม่เกิน 15% ของรายได้ทั้งปี และรวมกับกองทุนอื่นไม่เกิน 500,000 บาท
                        </small>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-4 mt-3"><label className="d-flex justify-content-end">กองทุนออมแห่งชาติ (กอช.)</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                nationalfund.current = v.target.value
                                props.inputFund({
                                    pensionfund: pensionfund.current,
                                    nationalfund: nationalfund.current,
                                    teacherfund: teacherfund.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.fund.nationalfund ? props.fund.nationalfund : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            ไม่เกิน 13,200 บาท และรวมกับกองทุนอื่นและเบี้ยประกันชีวิตแบบบำนาญแล้วไม่เกิน 500,000 บาท
                        </small>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-4 mt-3"><label className="d-flex justify-content-end">กองทุนครูเอกชน</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                teacherfund.current = v.target.value
                                props.inputFund({
                                    pensionfund: pensionfund.current,
                                    nationalfund: nationalfund.current,
                                    teacherfund: teacherfund.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.fund.teacherfund ? props.fund.teacherfund : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            ไม่เกิน 15% ของรายได้ทั้งปี และรวมกับกองทุนอื่นและเบี้ยประกันชีวิตแบบบำนาญแล้วไม่เกิน 500,000 บาท
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fund;