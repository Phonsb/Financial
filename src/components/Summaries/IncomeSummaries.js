import React, { useState, useEffect } from 'react'
import { } from 'bootstrap'
import { getDatabase, ref, onValue, } from "@firebase/database";
import IncomeS from './IncomeS';
import {data} from './DetailSummaries'

const IncomeSummaries = () => {
    const [incomesList, setincomesList] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'income');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setincomesList(Object.values(data))
        });
    }, [])

    const Sumincome = () => {
        let sum = 0
        incomesList.map((item) => {
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
            <h1>Income</h1>
            <div className="container card mt-2">
                <div>
                    <table className="table">
                        <tbody>
                            <th className="row">
                                <div className="col-md-1 d-flex mr-0">Transaction</div>
                                <div className="col-md-2">{[...incomesList].length}</div>
                                <div className="col-md-8"></div>
                            </th>
                            <th className="row">
                                <div className="col-md-1 d-flex mr-0">Income</div>
                                <div className="col-md-2"> {data['sumIncome']} Baht</div>
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
                        incomesList
                            ? incomesList.map((inco, index) =>
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
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default IncomeSummaries;