import React, { useRef, useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'

const Residence = (props) => {

    const [residence, setResidence] = useState({
        pvd: 0,
        socialsecurity: 0,
        housinterest: 0
    })

    const pvd = useRef(0)
    const socialsecurity = useRef(0)
    const housinterest = useRef(0)

    return (
        <div className="mt-3">
            <h4 className="mt-3">รายการลดหย่อนภาษี : กองทุน เงินประกันสังคม และที่อยู่อาศัย</h4>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-2 mt-2"><label className="d-flex justify-content-end">ค่าลดหย่อนกองทุนสำรองเลี้ยงชีพ (PVD)</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                pvd.current = v.target.value
                                props.inputResidence({
                                    pvd: pvd.current,
                                    socialsecurity: socialsecurity.current,
                                    housinterest: housinterest.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.residence.pvd ? props.residence.pvd : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            ไม่เกิน 15% ของเงินเดือน (ไม่รวมเงินสมทบจากนายจ้าง) และไม่เกิน 500,000 บาท
                        </small>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-2 mt-4"><label className="d-flex justify-content-end">เงินประกันสังคม</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                socialsecurity.current = v.target.value
                                props.inputResidence({
                                    pvd: pvd.current,
                                    socialsecurity: socialsecurity.current,
                                    housinterest: housinterest.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.residence.socialsecurity ? props.residence.socialsecurity : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            จำนวนเงินไม่เกิน 9,000 บาท
                        </small>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className=" col-md-2 mt-4"><label className="d-flex justify-content-end">ดอกเบี้ยซื้อที่อยู่อาศัย</label></div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className='row'>
                        <div className="col-12 mt-3 "><Input
                            onChange={(v => {
                                housinterest.current = v.target.value
                                props.inputResidence({
                                    pvd: pvd.current,
                                    socialsecurity: socialsecurity.current,
                                    housinterest: housinterest.current
                                })
                            })}
                            type="text"
                            name="number"
                            id="income"
                            defaultValue={props.residence.housinterest ? props.residence.housinterest : ""}
                            placeholder="ระบุจำนวนเงิน"></Input>
                        </div>
                        <small className='col-12 text-start text-success mt-1'>
                            จำนวนเงินไม่เกิน 100,000 บาท
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Residence;