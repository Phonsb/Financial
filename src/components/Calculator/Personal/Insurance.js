import React, { useRef, useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'



const Insurance = (props) => {
    const [insurance, setInsurance] = useState({
        lifeinsurance: 0,
        healthinsurance: 0,
        healthinsuparents: 0,
        pensioninsurance: 0
    })

    const lifeinsurance = useRef(0)
    const healthinsurance = useRef(0)
    const healthinsuparents = useRef(0)
    const pensioninsurance = useRef(0)

    return (
        <div className="mt-3">
            <h4 className="mt-3">รายการลดหย่อนภาษี : ประกัน</h4>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-2 mt-4"><label className="d-flex justify-content-end">เบี้ยประกันชีวิต</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                lifeinsurance.current = v.target.value
                                props.inputInsurance({
                                    lifeinsurance: lifeinsurance.current,
                                    healthinsurance: healthinsurance.current,
                                    healthinsuparents: healthinsuparents.current,
                                    pensioninsurance: pensioninsurance.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.insurance.lifeinsurance ? props.insurance.lifeinsurance : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            จำนวนเงินไม่เกิน 100,000 บาท
                        </small>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-2 mt-4"><label className="d-flex justify-content-end">เบี้ยประกันสุขภาพ</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                healthinsurance.current = v.target.value
                                props.inputInsurance({
                                    lifeinsurance: lifeinsurance.current,
                                    healthinsurance: healthinsurance.current,
                                    healthinsuparents: healthinsuparents.current,
                                    pensioninsurance: pensioninsurance.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.insurance.healthinsurance ? props.insurance.healthinsurance : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            จำนวนเงินไม่เกิน 25,000 บาท
                        </small>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-4">
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <small className='col-12 text-start text-secondary m-0'>
                        เบี้ยประกันชีวิต และประกันสุขภาพรวมกันต้องไม่เกิน 100,000 บาท
                    </small>
                    <hr />
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-2 mt-2"><label className="d-flex justify-content-end">เบี้ยประกันสุขภาพบิดา,มารดา</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                healthinsuparents.current = v.target.value
                                props.inputInsurance({
                                    lifeinsurance: lifeinsurance.current,
                                    healthinsurance: healthinsurance.current,
                                    healthinsuparents: healthinsuparents.current,
                                    pensioninsurance: pensioninsurance.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.insurance.healthinsuparents ? props.insurance.healthinsuparents : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            จำนวนเงินไม่เกิน 15,000 บาท
                        </small>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-2 mt-4"><label className="d-flex justify-content-end">เบี้ยประกันชีวิตบำนาญ</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                pensioninsurance.current = v.target.value
                                props.inputInsurance({
                                    lifeinsurance: lifeinsurance.current,
                                    healthinsurance: healthinsurance.current,
                                    healthinsuparents: healthinsuparents.current,
                                    pensioninsurance: pensioninsurance.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.insurance.pensioninsurance ? props.insurance.pensioninsurance : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            ไม่เกิน 15% ของรายได้ทั้งปี ไม่เกิน 200,000 บาท หากไม่ได้ใช้สิทธิประกันชีวิตทั่วไป สามารถนำมารวมได้สูงสุด 300,000 บาทและรวมกับกองทุนอื่นไม่เกิน 500,000 บาท
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Insurance;