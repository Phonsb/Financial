import React, { useState, useEffect } from 'react'
import { } from 'bootstrap'
import { getDatabase, ref, onValue, } from "@firebase/database";
import IncomeS from './IncomeS'


let data = { sumIncome:0, sumExpense:0}

const DetailSummaries = () => {
    const [incomeList, setincomeList] = useState([])
    const [expenseList, setexpenseList] = useState([])
    useEffect(() => {
        const db = getDatabase();
        const starCountRefIncome = ref(db, 'income');
        let total = [];
        onValue(starCountRefIncome, (snapshot) => {
            const data = snapshot.val();
            const income = Object.values(data)
            total.push(...income)
            setincomeList(income)
        });
        const starCountRefExpense = ref(db, 'expense');
        onValue(starCountRefExpense, (snapshot) => {
            const data = snapshot.val();
            const expense = Object.values(data)
            total.push(...expense)
            setexpenseList(expense)
        });
    }, [])

    const Sumincome = () => {
        let sumincome = 0
        incomeList.map((item) => {
            sumincome += +item.amount
        })
        data['sumIncome'] = sumincome;
        return (
            <span>
                {sumincome}
            </span>
        )
    }

    const Sumexpense = () => {
        let sumexpense = 0
        expenseList.map((item) => {
            sumexpense += +item.amount
        })
        data['sumExpense'] = sumexpense
        return (
            <span>
                {sumexpense}
            </span>
        )
    }

    const Sumtotal = () => {
        let sumincome = 0
        let sumexpense = 0
        let sumtotal = 0
        incomeList.map((item) => {
            sumincome += +item.amount
        })
        expenseList.map((item) => {
            sumexpense += +item.amount
        })
        sumtotal = sumincome - sumexpense
        data['sumTotal'] = sumtotal
        return (
            <span>
                {sumtotal}
            </span>
        )
    }
    return (
        <div>
            <div className="container card mt-3">
                <div>
                    <table className="table">
                        <tbody>
                            <th className="row">
                                <div className="col-md-1 d-flex mr-0">Transaction</div>
                                <div className="col-md-2">{[...incomeList, ...expenseList].length}</div>
                                <div className="col-md-8"></div>
                            </th>
                            <th className="row">
                                <div className="col-md-1 d-flex mr-0">Income</div>
                                <div className="col-md-2"> {Sumincome()} Baht</div>
                                <div className="col-md-8"></div>
                            </th>
                            <th className="row">
                                <div className="col-md-1 d-flex mr-0">Expense</div>
                                <div className="col-md-2"> {Sumexpense()} Baht</div>
                                <div className="col-md-8"></div>
                            </th>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className="table justify-content-center table-secondary">
                        <thead>
                            <tr className="row">
                                <th className="col-md-4">Date</th>
                                <th className="col-md-3">Category</th>
                                <th className="col-md-3">Detail</th>
                                <th className="col-md-2">Amount</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div>
                    {
                        incomeList && expenseList ? [...incomeList, ...expenseList].sort((a, b) => {
                            return new Date(a.date) - new Date(b.date);
                        }).map((inco, index) =>
                            <IncomeS inco={inco} key={index} />)
                            : ''
                    }
                </div>
                <table>
                    <tfoot >
                        <tr className="row">
                            <th className="col-md-9"></th>
                            <th className="col-md-1">Income</th>
                            <th className="col-md-2 ">{Sumincome()}</th>
                        </tr>
                        <tr className="row">
                            <th className="col-md-9"></th>
                            <th className="col-md-1">Expense</th>
                            <th className="col-md-2 ">{Sumexpense()}</th>
                        </tr>
                        <tr className="row">
                            <th className="col-md-9"></th>
                            <th className="col-md-1">Total</th>
                            <th className="col-md-2 ">{Sumtotal()}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default DetailSummaries;
export { data }