import React, { useState, useEffect } from 'react'
import { Skeleton, Switch, Card, Avatar, Button, Radio, Result } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getDatabase, ref, onValue, } from "@firebase/database";
import CradP from './CradP';

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
        console.log('test', test);
    }
    return (
        <div className="row">
            <div className="col-4">
            {ResultPlanning()}
            {
                planningRList
                    ? planningRList.map((planr, index) =>
                        <CradP planr={planr} key={index} />)
                    : ''
            }
        </div>
        </div>
        
    )
}
export default PlanningResult;