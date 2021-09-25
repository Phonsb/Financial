import React, { useState, useEffect } from 'react'
import { } from 'bootstrap'
import { getDatabase, ref, onValue, } from "@firebase/database";
import ExpenseS from './ExpenseS';
import {data} from './DetailSummaries'

const ExpenseSummaries = () => {
    const [expenseList, setexpenseList] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'expense');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setexpenseList(Object.values(data))
        });
    }, [])

    const Sumexpense = () => {
        let sum = 0
        expenseList.map((item) => {
            sum += +item.amount
        })
        return (
            <div>
                {sum}
            </div>
        )
    }
    return (
        <div>
            <h1>Expense</h1>
            <div className="container card mt-2">
                <div>
                    <table className="table">
                        <tbody>
                            <th className="row">
                                <div className="col-md-1 d-flex mr-0">Transaction</div>
                                <div className="col-md-2">{[...expenseList].length}</div>
                                <div className="col-md-8"></div>
                            </th>
                            <th className="row">
                                <div className="col-md-1 d-flex mr-0">Expense</div>
                                <div className="col-md-2"> {data['sumExpense']} Baht</div>
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
                        expenseList
                            ? expenseList.map((expen, index) =>
                                <ExpenseS expen={expen} key={index} />)
                            : ''
                    }
                </div>
                <table>
                    <tfoot >
                        <tr className="row">
                            <th className="col-md-9"></th>
                            <th className="col-md-1">Expense</th>
                            <th className="col-md-2 ">{Sumexpense()}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default ExpenseSummaries;