import React, { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, } from "@firebase/database";
import ListPayment from './ListPayment';

const PlanningResult = () => {
    const [planningRList, setplanningrList] = useState([])
    const [expenseList, setexpenseList] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'planning');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setplanningrList(Object.values(data))
        });
        const starCountRefExpense = ref(db, 'expense');
        onValue(starCountRefExpense, (snapshot) => {
            const data = snapshot.val(); console.log();
            const expense = Object.values(data)
            setexpenseList(expense)
        });
    }, [])

    const ResultPlanning = () => {
        const test = planningRList && planningRList.map(planItem => {
            let amount = []
            expenseList && expenseList.filter(expenseItem => expenseItem['category'].split(' ')[1] == planItem['toppic'] && amount.push(expenseItem['amount']))
            amount = amount.reduce((a, b) => (+a) + (+b), 0)
            return { ...planItem, amount: (+planItem['amount']) - amount }
        })
        console.log(expenseList);
        console.log('test', test);
    }
    const series = [{
        data: [1, 2, 3]
    }, {
        data: [5, 7, 11]
    }, {
        data: [13, 17, 19]
    }];
    return (
            <div className='container'>
                <div class="container text-center">
                    <div class="row justify-content-start">
                        {ResultPlanning()}
                        {
                            planningRList
                                ? planningRList.map((planr, index) =>
                                    <ListPayment key={index} planr={planr} />)
                                : ''
                        }
                        <PlusPayment />
                    </div>
                </div>
            </div>
    )
}
export default PlanningResult;

const PlusPayment = () => {
    return (
        <a href='/Planning' class="col-12 col-sm-6 col-lg-3 p-3 position-relative text-success">
            <i class="position-absolute top-50 start-50 translate-middle fas fa-plus-circle fs-1"></i>
            <div className='border shadow rounded p-3'>
                <div className='invisible'>
                    <div className='text-start fs-3'>ใช้จ่าย</div>
                    <div className='text-black-50 text-start'>ใช้จ่าย</div>
                    <div className='text-start mt-4'>
                        <span className='text-black-50'>฿</span>
                        <span className='fw-bold fs-5'> 8,000.00</span>
                    </div>

                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                    </div>
                </div>
            </div>
        </a>

    )
}