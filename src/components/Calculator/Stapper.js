import * as React from 'react';
import { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IncomeTex from './Personal/IncomTex';
import ReFamily from './Personal/ReFamily';
import Residence from './Personal/Residence';
import Insurance from './Personal/Insurance';
import Fund from './Personal/Fund';
import TaxCalculator from './Personal/TaxCalculator';

const steps = ['รายรับ', 'ลดหย่อนครอบครัว', 'กองทุนสำรองเลี้ยงชีพ ฯลฯ', 'ประกัน', 'กองทุน อื่นๆ', 'คำนวณภาษี'];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const taxObj = useRef({
        reFamily: 0,
        residence: 0,
        insurance: 0,
        fund: 0,
        pvd: 0,
        sumPenPvd: 0,
        income: 0
    })
    const [sonState, setSonstate] = useState();
    const [familyState, setFamilystate] = useState();

    const [incomeTex, setIncomTex] = useState({
        salary: 0,
        bonus: 0,
        other: 0
    })
    const inputIncome = (data) => {
        setIncomTex({
            salary: +data.salary || 0,
            bonus: +data.bonus || 0,
            other: +data.other || 0
        })
        console.log({ data })
        taxObj.current.income = (+data.salary*12)+(+data.bonus)+(+data.other)
    }

    const [residenceTex, setResidenceTex] = useState({
        pvd: 0,
        socialsecurity: 0,
        housinterest: 0
    })
    const inputResidence = (data) => {
        data = {
            pvd: +data.pvd,
            socialsecurity: +data.socialsecurity || 0,
            housinterest: +data.housinterest || 0
        }
        setResidenceTex({
            pvd: data.pvd || 0,
            socialsecurity: data.socialsecurity || 0,
            housinterest: data.housinterest || 0
        })
        let _pvd = 0
        let _socialsecurity = 0
        let _housinterest = 0
        const underSalary = calSalary(15, incomeTex.salary);

        if(data.pvd <= underSalary && data.pvd <= 500000){
            _pvd = data.pvd
        }else if(data.pvd > underSalary && data.pvd <= 500000){
            _pvd = underSalary
        }else if(data.pvd > underSalary && data.pvd > 500000){
            _pvd = 500000
        }

        taxObj.current.pvd = _pvd
        
        if(data.socialsecurity <= 9000){
            _socialsecurity = data.socialsecurity
        }else {
            _socialsecurity = 9000
        }

        if(data.housinterest <= 100000){
            _housinterest = data.housinterest
        }else {
            _housinterest = 100000
        }

        taxObj.current.residence = _housinterest+_socialsecurity
    }

    const calSalary = (percent, salary) => {
        return (salary*percent)/100
    }


    const [insuranceTex, setInsuranceTex] = useState({
        lifeinsurance: 0,
        healthinsurance: 0,
        healthinsuparents: 0,
        pensioninsurance: 0
    })
    const inputInsurance = (data) => {
        data = {
            lifeinsurance: +data.lifeinsurance || 0,
            healthinsurance: +data.healthinsurance || 0,
            healthinsuparents: +data.healthinsuparents || 0,
            pensioninsurance: +data.pensioninsurance || 0
        }
        setInsuranceTex({
            lifeinsurance: data.lifeinsurance || 0,
            healthinsurance: data.healthinsurance || 0,
            healthinsuparents: data.healthinsuparents || 0,
            pensioninsurance: data.pensioninsurance || 0
        })
        
        let sumLifeHealth = 0
        let _lifeinsurance = 0
        let _healthinsurance = 0
        let _healthinsuparents = 0
        let _pensioninsurance = 0

        if(data.lifeinsurance <= 100000){
            _lifeinsurance = data.lifeinsurance
        }else {
            _lifeinsurance = 100000
        }

        if(data.healthinsurance <= 25000){
            _healthinsurance = data.healthinsurance
        }else {
            _healthinsurance = 25000
        }

        if((_healthinsurance + _lifeinsurance) <= 100000){
            sumLifeHealth = _healthinsurance + _lifeinsurance
        }else {
            sumLifeHealth = 100000
        }

        if(data.healthinsuparents <= 15000){
            _healthinsuparents = data.healthinsuparents
        }else {
            _healthinsuparents = 15000
        }
        const underSalary = calSalary(15, (incomeTex.salary*12));
        if(data.pensioninsurance <= underSalary && data.pensioninsurance <= 200000){
            _pensioninsurance = data.pensioninsurance
        }else if(data.pensioninsurance > underSalary && data.pensioninsurance <= 200000) {
            _pensioninsurance = underSalary
        }else if(data.pensioninsurance > underSalary && data.pensioninsurance > 200000) {
            _pensioninsurance = 200000
        }
        let sumPenPvd = 0
        if((_pensioninsurance + taxObj.current.pvd) <= 500000){
            sumPenPvd = _pensioninsurance + taxObj.current.pvd
        }else {
            sumPenPvd = 500000
        }
        taxObj.current.sumPenPvd = sumPenPvd
        taxObj.current.insurance = (+sumLifeHealth)+(+_healthinsuparents)
    }

    const [fundTex, setFundTex] = useState({
        pensionfund: 0,
        nationalfund: 0,
        teacherfund: 0
    })
    const inputFund = (data) => {
        data = {
            pensionfund: +data.pensionfund || 0,
            nationalfund: +data.nationalfund || 0,
            teacherfund: +data.teacherfund || 0
        }
        setFundTex({
            pensionfund: data.pensionfund || 0,
            nationalfund: data.nationalfund || 0,
            teacherfund: data.teacherfund || 0
        })
        console.log({ data })

        let _pensionfund =  0
        let _nationalfund = 0
        let _teacherfund = 0
        const underSalary = calSalary(15, (incomeTex.salary*12));
        if(data.pensionfund <= underSalary){
            _pensionfund = data.pensionfund
        }else {
            _pensionfund = underSalary
        }
        let sumPenPvdPension = 0
        if((_pensionfund + taxObj.current.sumPenPvd) <= 500000){
            sumPenPvdPension = _pensionfund + taxObj.current.sumPenPvd
        }else {
            sumPenPvdPension = 500000
        }

        if(data.nationalfund <= 13200){
            _nationalfund = data.nationalfund
        }else {
            _nationalfund = 13200
        }
        let sumPenPvdPensionnational = 0
        if((_nationalfund + sumPenPvdPension) <= 500000){
            sumPenPvdPensionnational = _nationalfund + sumPenPvdPension
        }else {
            sumPenPvdPensionnational = 500000
        }
       
        if(data.teacherfund <= underSalary ){
            _teacherfund = data.teacherfund
        }else {
            _teacherfund = underSalary
        }
        let sumfund = 0
        if((_teacherfund + sumPenPvdPensionnational) <= 500000){
            sumfund = _teacherfund + sumPenPvdPensionnational
        }else {
            sumfund = 500000
        }

        taxObj.current.fund = sumfund



    }

    const [reFamilyTex, setRefamlyTex] = useState({
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
        dispersonrelacou: 0,
        couple: 0
    })
    const inputRefamily = (data) => {
        setRefamlyTex({
            father: data.father || false,
            mother: data.mother || false,
            fathercou: data.fathercou || false,
            mothercou: data.mothercou || false,
            son: +data.son || 0,
            son61: +data.son61 || 0,
            son62: +data.son62 || 0,
            dispersonfa: data.dispersonfa || false,
            dispersonma: data.dispersonma || false,
            dispersonrela: data.dispersonrela || false,
            dispersonfacou: data.dispersonfacou || false,
            dispersonma: data.dispersonmacou || false,
            dispersonrela: data.dispersonrelacou || false,
            couple: +data.couple || 0
        })
        calRefamily(data);

        console.log({ reFamilyTex, data, sumrefam })
    }

    const [sumrefam, setSumRefam] = useState(0)
    const calRefamily = (data) => {
        const _reFamilyTex = data
        let sum = 0;
        if (familyState == '4') {
            setRefamlyTex({ ...reFamilyTex, couple: 60000 })
        } else {
            const arrayFamily = Object.values(_reFamilyTex)
            const keysFamily = Object.keys(_reFamilyTex)
            for (let i = 0; i < arrayFamily.length; i++) {
                if (keysFamily[i] == 'son61' || keysFamily[i] == 'son62') {
                    sum = keysFamily[i] == 'son61' ? sum + (arrayFamily[i] * 30000) : sum + (arrayFamily[i] * 60000)
                } else if (arrayFamily[i]) {
                    sum = sum + 30000
                }
            }
            console.log({ sum })
        }

        taxObj.current.reFamily = sum;

        // sum = reFamilyTex.father + reFamilyTex.mother + reFamilyTex.fathercou + reFamilyTex.mothercou + reFamilyTex.dispersonfa + reFamilyTex.dispersonfacou + reFamilyTex.dispersonma + reFamilyTex.dispersonmacou + reFamilyTex.dispersonrela + reFamilyTex.dispersonrelacou + reFamilyTex.son + reFamilyTex.son61 + reFamilyTex.son62 + reFamilyTex.couple + 60000;
        // setSumRefam(sum);
    }




    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <div className="header-box mt-3 p-3 card-box shadow">
            <h2 className="mt-3 text-success">คำนวณภาษี</h2>
            <h6>ช่วยคำนวณภาษีเงินได้บุคคลธรรมดาประจำปี</h6>
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep} alignItems="center" justifyContent="center">
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]} sx={{ justifyContent: 'space-between' }}>
                            <StepButton sx={{ width: 100 }} color="inherit" onClick={handleStep(index)}>
                            </StepButton>
                            <div className='text-truncate'>{label}</div>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <h3 className='mt-5 text-danger '>คุณต้องการเริ่มทำใหม่หรือเปล่า?</h3>
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>เริ่มต้นใหม่</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                {activeStep == 0 ?
                                    <div>
                                        <IncomeTex inputIncome={inputIncome} income={incomeTex} />
                                    </div>
                                    : (activeStep == 1 ?
                                        <div>
                                            <ReFamily setFamilystate={setFamilystate} setRefamlyTex={setRefamlyTex} sumrefam={sumrefam} setSumRefam={setSumRefam} inputRefamily={inputRefamily} reFamily={reFamilyTex} sonState={sonState} familyState={familyState} />
                                        </div>
                                        :
                                        (activeStep == 2 ?
                                            <div>
                                                <Residence inputResidence={inputResidence} residence={residenceTex} />
                                            </div>
                                            :
                                            (activeStep == 3 ?
                                                <div>
                                                    <Insurance inputInsurance={inputInsurance} insurance={insuranceTex} />
                                                </div>
                                                :
                                                (activeStep == 4 ?
                                                    <div>
                                                        <Fund inputFund={inputFund} fund={fundTex} />
                                                    </div>
                                                    :
                                                    <div>
                                                        <TaxCalculator sumrefam={sumrefam} taxObj={taxObj.current} calRefamily={calRefamily} />
                                                    </div>
                                                )
                                            )
                                        )

                                    )}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    ย้อนกลับ
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleComplete}>
                                    {completedSteps() === totalSteps() - 1
                                        ? 'เสร็จสิ้น'
                                        : 'ถัดไป'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>
        </div>
    );
}
