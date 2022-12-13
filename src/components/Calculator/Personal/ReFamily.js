import React, { useRef, useState } from 'react'
import { Input, Button, ButtonGroup } from 'reactstrap';
import { } from 'bootstrap'


const ReFamily = (props) => {
    const [familyState, setFamilystate] = useState("");
    const [reFamily, setRefamly] = useState({
        father: 0,
        mother: 0,
        fathercou: 0,
        mothercou: 0,
        son: 0,
        son61: 0,
        son62: 0,
        dispersonfa: 0,
        dispersonma: 0,
        dispersonrela: 0,
        dispersonfacou: 0,
        dispersonmacou: 0,
        dispersonrelacou: 0
    })

    const father = useRef(0)
    const mother = useRef(0)
    const fathercou = useRef(0)
    const mothercou = useRef(0)
    const son = useRef(0)
    const son61 = useRef(0)
    const son62 = useRef(0)
    const dispersonfa = useRef(0)
    const dispersonma = useRef(0)
    const dispersonrela = useRef(0)
    const dispersonfacou = useRef(0)
    const dispersonmacou = useRef(0)
    const dispersonrelacou = useRef(0)

    const handelChangeFamState = (state) => {
        // console.log(state.target.value)
        props.inputRefamily({...reFamily})
        setFamilystate(state.target.value)
        props.setFamilystate(state.target.value)
    }
    const [sonState, setSonstate] = useState("option1")
    const handelChangesonState = (state) => {
        setSonstate(state.target.value)
    }

    return (
        <div className="mt-3">
            <h4 className="mt-3">รายการลดหย่อนภาษี : ครอบครัว</h4>
            <div className="row ">
                <div className=" col-md-3 mt-3"><label className="d-flex justify-content-end">สถานะสมรส</label></div>
                <div className='col-3 mt-2 col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <select onChange={handelChangeFamState} className='form-select' aria-label="Default select example">
                        <option selected>กรุณาเลือกสถานะ</option>
                        <option value="1">โสด</option>
                        <option value="2">หย่า</option>
                        <option value="3">คู่สมรสมีเงินได้(แยกยื่น)</option>
                        <option value="4">คู่สมรสมีไม่มีเงินได้</option>
                    </select>
                </div>
                <div className=" col-md-2 mt-3"><label className="d-flex justify-content-end">ลดหย่อนส่วนบุคคล</label></div>
                <form className='col-md-3 mt-2 ol-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <fieldset disabled>
                        <div class="form-group">
                            <input type="text" id="disabledTextInput" class="form-control" placeholder="60,000"></input>
                        </div>
                    </fieldset>
                </form>
            </div>


            {familyState == '1' && <div>
                <div className='col-md-6 justify-content-end mt-4 mx-4'>ลดหย่อนบิดา-มารดา (ตนเอง)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                father.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-6 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                mother.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-11 justify-content-end'>
                    <small className='text-success'>คนละ 30,000 บาท (บิดามารดาต้องมีอายุเกิน 60 ปี และมีเงินได้ไม่เกิน 30,000 บาทต่อปี) (ได้ทั้งบิดา มารดาของตนเอง และคู่สมรส)</small>
                </div>
                <div className='col-md-7 justify-content-end mt-4 mx-3'>ลดหย่อนผู้พิการหรือทุพพลภาพ (ไม่มีเงินได้)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonfa.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonma.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='form-check col-3 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonrela.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>ญาติ (เช่น พี่,น้อง ฯลฯ)</small>
                        </label>
                    </div>
                    <div className='col-md-8 justify-content-end mx-3'>
                        <small className='text-success'>กรณีบิดา, มารดา, คู่สมรส, บิดาคู่สมรส , มารดาคู่สมรส และบุตรของตนเอง</small>
                    </div>
                    <div className='col-md-10 justify-content-end'>
                        <small className='text-success'>หากเป็นผู้อื่นได้เพียง 1 คนเท่านั้น ลดหย่อนได้คนละ 60,000 บาท (ต้องมีบัตรประจำตัวคนพิการ และไม่มีรายได้)</small>
                    </div>
                </div>
            </div>}




            {familyState == '2' && <div>
                <div className='col-md-6 justify-content-end mt-4 mx-4'>ลดหย่อนบิดา-มารดา (ตนเอง)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                father.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-6 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                mother.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-11 justify-content-end'>
                    <small className='text-success'>คนละ 30,000 บาท (บิดามารดาต้องมีอายุเกิน 60 ปี และมีเงินได้ไม่เกิน 30,000 บาทต่อปี) (ได้ทั้งบิดา มารดาของตนเอง และคู่สมรส)</small>
                </div>
                <div className='col-md-6 justify-content-end mt-4 mx-2'>บุตรคนที่ 1 (เกิดปีใดก็ตาม)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input onClick={handelChangesonState} class="form-check-input checkbox-po" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" ></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>มี</small>
                        </label>
                    </div>
                    <div className='form-check col-3 d-flex justify-content-start mx-1'>
                        <input onClick={handelChangesonState} class="form-check-input checkbox-po" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>ไม่มี</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-5 justify-content-end mx-5'>
                    <small className='text-success'>ลดหย่อน 30,000 บาท</small>
                </div>
                {sonState == "option2" ?
                    <div>
                        <div className='col-md-5 justify-content-end mt-4 mx-5'>บุตรคนที่ 2 เป็นต้นไป</div>
                        <div className='row'>
                            <div className=" col-md-4 mt-3 d-flex justify-content-end mx-3">จำนวนบุตรที่เกิดก่อนปี 2561</div>
                            <div className=" col-md-3 mt-3">จำนวนบุตรที่เกิดตั้งแต่ปี 2561 เป็นต้นไป</div>
                        </div>

                        <div className='row'>
                            <div className='col-2 mx-3'> </div>
                            <div className='col-2'><Input
                                onChange={(v => {
                                    son61.current = v.target.value
                                    props.inputRefamily({
                                        father: father.current,
                                        mother: mother.current,
                                        fathercou: fathercou.current,
                                        mothercou: mothercou.current,
                                        son: son.current,
                                        son61: son61.current,
                                        son62: son62.current,
                                        dispersonfa: dispersonfa.current,
                                        dispersonma: dispersonma.current,
                                        dispersonrela: dispersonrela.current,
                                        dispersonfacou: dispersonfacou.current,
                                        dispersonmacou: dispersonmacou.current,
                                        dispersonrelacou: dispersonrelacou.current
                                    })
                                })}
                                type="text"
                                name="number"
                                id="income"
                                placeholder="ระบุจำนวนคน"></Input>
                            </div>
                            <div className='col-2 text-end mx-3'><Input
                                onChange={(v => {
                                    son62.current = v.target.value
                                    props.inputRefamily({
                                        father: father.current,
                                        mother: mother.current,
                                        fathercou: fathercou.current,
                                        mothercou: mothercou.current,
                                        son: son.current,
                                        son61: son61.current,
                                        son62: son62.current,
                                        dispersonfa: dispersonfa.current,
                                        dispersonma: dispersonma.current,
                                        dispersonrela: dispersonrela.current,
                                        dispersonfacou: dispersonfacou.current,
                                        dispersonmacou: dispersonmacou.current,
                                        dispersonrelacou: dispersonrelacou.current
                                    })
                                })}
                                type="text"
                                name="number"
                                id="income"
                                placeholder="ระบุจำนวนคน"></Input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-1 mx-4'></div>
                            <div className='col-md-3 justify-content-end mx-3'>
                                <small className='text-success'>ลดหย่อนคนละ 30,000 บาท</small>
                            </div>
                            <div className='col-md-3 d-flex justify-content-start'>
                                <small className='text-success'>ลดหย่อนคนละ 60,000 บาท</small>
                            </div>
                        </div>
                    </div> : ''}
                <div className='col-md-7 justify-content-end mt-4 mx-3'>ลดหย่อนผู้พิการหรือทุพพลภาพ (ไม่มีเงินได้)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onChange={(v => {
                                dispersonfa.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonma.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='form-check col-3 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonrela.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>ญาติ (เช่น พี่,น้อง ฯลฯ)</small>
                        </label>
                    </div>
                    <div className='col-md-8 justify-content-end mx-3'>
                        <small className='text-success'>กรณีบิดา, มารดา, คู่สมรส, บิดาคู่สมรส , มารดาคู่สมรส และบุตรของตนเอง</small>
                    </div>
                    <div className='col-md-10 justify-content-end'>
                        <small className='text-success'>หากเป็นผู้อื่นได้เพียง 1 คนเท่านั้น ลดหย่อนได้คนละ 60,000 บาท (ต้องมีบัตรประจำตัวคนพิการ และไม่มีรายได้)</small>
                    </div>
                </div>
            </div>}



            {familyState == '3' && <div>
                <div className='row'>
                    <div className='col-1 mx-3'></div>
                    <div className='col-md-3 d-flex justify-content-end mt-4'>ลดหย่อนบิดา-มารดา (ตนเอง)</div>
                    <div className='col-1'></div>
                    <div className='col-md-6 d-flex justify-content-start mt-4' >ลดหย่อนบิดา-มารดา (คู่สมรส)</div>
                </div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                father.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                mother.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='col-1'></div>
                    <div className='form-check col-1 d-flex justify-content-end'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                fathercou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                mothercou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-11 justify-content-end'>
                    <small className='text-success'>คนละ 30,000 บาท (บิดามารดาต้องมีอายุเกิน 60 ปี และมีเงินได้ไม่เกิน 30,000 บาทต่อปี) (ได้ทั้งบิดา มารดาของตนเอง และคู่สมรส)</small>
                </div>
                <div className='col-md-6 justify-content-end mt-4 mx-2'>บุตรคนที่ 1 (เกิดปีใดก็ตาม)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input onClick={handelChangesonState} class="form-check-input checkbox-po" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" ></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>มี</small>
                        </label>
                    </div>
                    <div className='form-check col-3 d-flex justify-content-start mx-1'>
                        <input onClick={handelChangesonState} class="form-check-input checkbox-po" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>ไม่มี</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-5 justify-content-end mx-5'>
                    <small className='text-success'>ลดหย่อน 30,000 บาท</small>
                </div>
                {sonState == "option2" ?
                    <div>
                        <div className='col-md-5 justify-content-end mt-4 mx-5'>บุตรคนที่ 2 เป็นต้นไป</div>
                        <div className='row'>
                            <div className=" col-md-4 mt-3 d-flex justify-content-end mx-3">จำนวนบุตรที่เกิดก่อนปี 2561</div>
                            <div className=" col-md-3 mt-3">จำนวนบุตรที่เกิดตั้งแต่ปี 2561 เป็นต้นไป</div>
                        </div>

                        <div className='row'>
                            <div className='col-2 mx-3'> </div>
                            <div className='col-2'><Input
                                onChange={(v => {
                                    son61.current = v.target.value
                                    props.inputRefamily({
                                        father: father.current,
                                        mother: mother.current,
                                        fathercou: fathercou.current,
                                        mothercou: mothercou.current,
                                        son: son.current,
                                        son61: son61.current,
                                        son62: son62.current,
                                        dispersonfa: dispersonfa.current,
                                        dispersonma: dispersonma.current,
                                        dispersonrela: dispersonrela.current,
                                        dispersonfacou: dispersonfacou.current,
                                        dispersonmacou: dispersonmacou.current,
                                        dispersonrelacou: dispersonrelacou.current
                                    })
                                })}
                                type="text"
                                name="number"
                                id="income"
                                placeholder="ระบุจำนวนคน"></Input>
                            </div>
                            <div className='col-2 text-end mx-3'><Input
                                onChange={(v => {
                                    son62.current = v.target.value
                                    props.inputRefamily({
                                        father: father.current,
                                        mother: mother.current,
                                        fathercou: fathercou.current,
                                        mothercou: mothercou.current,
                                        son: son.current,
                                        son61: son61.current,
                                        son62: son62.current,
                                        dispersonfa: dispersonfa.current,
                                        dispersonma: dispersonma.current,
                                        dispersonrela: dispersonrela.current,
                                        dispersonfacou: dispersonfacou.current,
                                        dispersonmacou: dispersonmacou.current,
                                        dispersonrelacou: dispersonrelacou.current
                                    })
                                })}
                                type="text"
                                name="number"
                                id="income"
                                placeholder="ระบุจำนวนคน"></Input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-1 mx-4'></div>
                            <div className='col-md-3 justify-content-end mx-3'>
                                <small className='text-success'>ลดหย่อนคนละ 30,000 บาท</small>
                            </div>
                            <div className='col-md-3 d-flex justify-content-start'>
                                <small className='text-success'>ลดหย่อนคนละ 60,000 บาท</small>
                            </div>
                        </div>
                    </div> : ''}
                <div className='col-md-7 justify-content-end mt-4 mx-3'>ลดหย่อนผู้พิการหรือทุพพลภาพ (ไม่มีเงินได้)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonfa.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonma.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='form-check col-3 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonrela.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>ญาติ (เช่น พี่,น้อง ฯลฯ)</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-7 justify-content-end mt-4 mx-4'>ลดหย่อนผู้พิการหรือทุพพลภาพ (คู่สมรสไม่มีเงินได้)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-4'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonfacou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>คู่สมรส</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonmacou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-3 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonrelacou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='col-md-8 justify-content-end mx-3'>
                        <small className='text-success'>กรณีบิดา, มารดา, คู่สมรส, บิดาคู่สมรส , มารดาคู่สมรส และบุตรของตนเอง</small>
                    </div>
                    <div className='col-md-10 justify-content-end'>
                        <small className='text-success'>หากเป็นผู้อื่นได้เพียง 1 คนเท่านั้น ลดหย่อนได้คนละ 60,000 บาท (ต้องมีบัตรประจำตัวคนพิการ และไม่มีรายได้)</small>
                    </div>
                </div>
            </div>}



            {familyState == '4' && <div>
                <div className='col-md-4 d-flex justify-content-end mt-4 mx-4'>
                    <small className='text-success'>ลดหย่อนคู่สมรสไม่มีรายได้ 60,000 บาท</small>
                </div>
                <div className='row'>
                    <div className='col-1 mx-3'></div>
                    <div className='col-md-3 d-flex justify-content-end mt-4'>ลดหย่อนบิดา-มารดา (ตนเอง)</div>
                    <div className='col-1'></div>
                    <div className='col-md-6 d-flex justify-content-start mt-4' >ลดหย่อนบิดา-มารดา (คู่สมรส)</div>
                </div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                father.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                mother.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='col-1'></div>
                    <div className='form-check col-1 d-flex justify-content-end'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                fathercou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                mothercou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-11 justify-content-end'>
                    <small className='text-success'>คนละ 30,000 บาท (บิดามารดาต้องมีอายุเกิน 60 ปี และมีเงินได้ไม่เกิน 30,000 บาทต่อปี) (ได้ทั้งบิดา มารดาของตนเอง และคู่สมรส)</small>
                </div>
                <div className='col-md-6 justify-content-end mt-4 mx-2'>บุตรคนที่ 1 (เกิดปีใดก็ตาม)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input onClick={handelChangesonState} class="form-check-input checkbox-po" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" ></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>มี</small>
                        </label>
                    </div>
                    <div className='form-check col-3 d-flex justify-content-start mx-1'>
                        <input onClick={handelChangesonState} class="form-check-input checkbox-po" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>ไม่มี</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-5 justify-content-end mx-5'>
                    <small className='text-success'>ลดหย่อน 30,000 บาท</small>
                </div>
                {sonState == "option2" ?
                    <div>
                        <div className='col-md-5 justify-content-end mt-4 mx-5'>บุตรคนที่ 2 เป็นต้นไป</div>
                        <div className='row'>
                            <div className=" col-md-4 mt-3 d-flex justify-content-end mx-3">จำนวนบุตรที่เกิดก่อนปี 2561</div>
                            <div className=" col-md-3 mt-3">จำนวนบุตรที่เกิดตั้งแต่ปี 2561 เป็นต้นไป</div>
                        </div>

                        <div className='row'>
                            <div className='col-2 mx-3'> </div>
                            <div className='col-2'><Input
                                onChange={(v => {
                                    son61.current = v.target.value
                                    props.inputRefamily({
                                        father: father.current,
                                        mother: mother.current,
                                        fathercou: fathercou.current,
                                        mothercou: mothercou.current,
                                        son: son.current,
                                        son61: son61.current,
                                        son62: son62.current,
                                        dispersonfa: dispersonfa.current,
                                        dispersonma: dispersonma.current,
                                        dispersonrela: dispersonrela.current,
                                        dispersonfacou: dispersonfacou.current,
                                        dispersonmacou: dispersonmacou.current,
                                        dispersonrelacou: dispersonrelacou.current
                                    })
                                })}
                                type="text"
                                name="number"
                                id="income"
                                placeholder="ระบุจำนวนคน"></Input>
                            </div>
                            <div className='col-2 text-end mx-3'><Input
                                onChange={(v => {
                                    son62.current = v.target.value
                                    props.inputRefamily({
                                        father: father.current,
                                        mother: mother.current,
                                        fathercou: fathercou.current,
                                        mothercou: mothercou.current,
                                        son: son.current,
                                        son61: son61.current,
                                        son62: son62.current,
                                        dispersonfa: dispersonfa.current,
                                        dispersonma: dispersonma.current,
                                        dispersonrela: dispersonrela.current,
                                        dispersonfacou: dispersonfacou.current,
                                        dispersonmacou: dispersonmacou.current,
                                        dispersonrelacou: dispersonrelacou.current
                                    })
                                })}
                                type="text"
                                name="number"
                                id="income"
                                placeholder="ระบุจำนวนคน"></Input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-1 mx-4'></div>
                            <div className='col-md-3 justify-content-end mx-3'>
                                <small className='text-success'>ลดหย่อนคนละ 30,000 บาท</small>
                            </div>
                            <div className='col-md-3 d-flex justify-content-start'>
                                <small className='text-success'>ลดหย่อนคนละ 60,000 บาท</small>
                            </div>
                        </div>
                    </div> : ''}
                <div className='col-md-7 justify-content-end mt-4 mx-3'>ลดหย่อนผู้พิการหรือทุพพลภาพ (ไม่มีเงินได้)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-1'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonfa.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonma.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='form-check col-3 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonrela.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>ญาติ (เช่น พี่,น้อง ฯลฯ)</small>
                        </label>
                    </div>
                </div>
                <div className='col-md-7 justify-content-end mt-4 mx-4'>ลดหย่อนผู้พิการหรือทุพพลภาพ (คู่สมรสไม่มีเงินได้)</div>
                <div className='row mt-2'>
                    <div className='form-check col-3 d-flex justify-content-end mx-4'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonfacou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small className='mx-2'>คู่สมรส</small>
                        </label>
                    </div>
                    <div className='form-check col-1 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonmacou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>บิดา</small>
                        </label>
                    </div>
                    <div className='form-check col-3 text-start'>
                        <input className='form-check-input checkbox-po' type="checkbox" value="" id="flexCheckDefault"
                            onClick={(v => {
                                dispersonrelacou.current = v.target.checked
                                props.inputRefamily({
                                    father: father.current,
                                    mother: mother.current,
                                    fathercou: fathercou.current,
                                    mothercou: mothercou.current,
                                    son: son.current,
                                    son61: son61.current,
                                    son62: son62.current,
                                    dispersonfa: dispersonfa.current,
                                    dispersonma: dispersonma.current,
                                    dispersonrela: dispersonrela.current,
                                    dispersonfacou: dispersonfacou.current,
                                    dispersonmacou: dispersonmacou.current,
                                    dispersonrelacou: dispersonrelacou.current
                                })
                            })}></input>
                        <label className='form-check-label' for="flexCheckDefault">
                            <small>มารดา</small>
                        </label>
                    </div>
                    <div className='col-md-8 justify-content-end mx-3'>
                        <small className='text-success'>กรณีบิดา, มารดา, คู่สมรส, บิดาคู่สมรส , มารดาคู่สมรส และบุตรของตนเอง</small>
                    </div>
                    <div className='col-md-10 justify-content-end'>
                        <small className='text-success'>หากเป็นผู้อื่นได้เพียง 1 คนเท่านั้น ลดหย่อนได้คนละ 60,000 บาท (ต้องมีบัตรประจำตัวคนพิการ และไม่มีรายได้)</small>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default ReFamily;