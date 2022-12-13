import React, { useState, useEffect, useRef } from 'react'
import { Input } from 'reactstrap'
import Chart from "react-google-charts"
import { getDatabase, ref, onValue, } from "@firebase/database"
import IncomeS from './IncomeS'
import { MDBDataTableV5 } from 'mdbreact'


let data = { sumIncome: 0, sumExpense: 0 }

const DetailSummaries = () => {
    const [incomeList, setincomeList] = useState([])
    const [expenseList, setexpenseList] = useState([])
    const [incomeListDF, setincomeListDF] = useState([])
    const [expenseListDF, setexpenseListDF] = useState([])
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


    const [dataTable, setDataTable] = useState({
        columns: [
            {
                label: 'Date',
                field: 'date',
                width: 150,
            },
            {
                label: 'Category',
                field: 'category',
                width: 150,
            },
            {
                label: 'Detail',
                field: 'detail',
                width: 150,
            },
            {
                label: 'Amount',
                field: 'amount',
                width: 150,
            },
        ],
        rows: [
            {
                date: '',
                category: '',
                detail: '',
                amount: '',
            }
        ]
    })

    const lastTransaction = () => {
        const lastItemIncome = incomeList && incomeList.reduce((prev, curr) => {
            const prevTimestamp = new Date(prev['date']) / 1000;
            const currTimestamp = new Date(curr['date']) / 1000;
            if (prevTimestamp > currTimestamp) {
                return prev
            } else {
                return curr
            }
        }, { date: incomeList[0] && incomeList[0]['date'] || null })

        const lastItemExpense = expenseList && expenseList.reduce((prev, curr) => {
            const prevTimestamp = new Date(prev['date']) / 1000;
            const currTimestamp = new Date(curr['date']) / 1000;
            if (prevTimestamp > currTimestamp) {
                return prev
            } else {
                return curr
            }
        }, { date: expenseList[0] && expenseList[0]['date'] || null })
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg card text-center shadow mb-4">
            <div className="d-flex mt-2 justify-content-center ">
                <table className="table">
                    <thead>
                        <tr className="border-bottom">
                            <td className="border-bottom-0 text-start"><h4>Recent transactions</h4>  </td>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className=" d-flex "> 
                            <td className="col text-start border-bottom-0 "><h5 className="text-primary">Income</h5></td>
                        </tr>
                        <tr className="bg-table-body">
                            <td className="col-6 text-start">Date</td>
                            <td className="col-6 text-end ">{new Date(lastItemIncome['date']).toLocaleDateString('en-EN', options)}</td>
                        </tr>
                        <tr className=" bg-table-body">
                            <td className="col-6 text-start">Detail</td>
                            <td className="col-6 text-end">{lastItemIncome['category']}</td>
                        </tr>
                        <tr className=" bg-table-body">
                            <td className="col-6 text-start">Detail</td>
                            <td className="col-6 text-end">{lastItemIncome['detail']}</td>
                        </tr>
                        <tr className=" bg-table-body">
                            <td className="col-6 text-start">Amount</td>
                            <td className="col-6 text-end">{lastItemIncome['amount']}</td>
                        </tr>
                        <tr>
                            <td className="col text-start border-bottom-0 "><h5 className="text-danger">Expense</h5></td>
                        </tr>
                       
                        <tr className=" bg-table-body">
                            <td className="col-6 text-start">Date</td>
                            <td className="col-6 text-end ">{new Date(lastItemExpense['date']).toLocaleDateString('en-EN', options)}</td>
                        </tr>
                        <tr className=" bg-table-body">
                            <td className="col-6 text-start">Detail</td>
                            <td className="col-6 text-end">{lastItemExpense['category']}</td>
                        </tr>
                        <tr className=" bg-table-body">
                            <td className="col-6 text-start">Detail</td>
                            <td className="col-6 text-end">{lastItemExpense['detail']}</td>
                        </tr>
                        <tr className=" bg-table-body">
                            <td className="col-6 text-start">Amount</td>
                            <td className="col-6 text-end">{lastItemExpense['amount']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    }

    useEffect(() => {
        const db = getDatabase();
        const starCountRefIncome = ref(db, 'income');
        let total = [];
        onValue(starCountRefIncome, (snapshot) => {
            const data = snapshot.val();
            const income = Object.values(data)
            total.push(...income)
            setincomeList(income)
            setincomeListDF(income)
        });
        const starCountRefExpense = ref(db, 'expense');
        onValue(starCountRefExpense, (snapshot) => {
            const data = snapshot.val();
            const expense = Object.values(data)
            total.push(...expense)
            setexpenseList(expense)
            setexpenseListDF(expense)
        });

        setTimeout(() => {
            setDataTable({
                columns: [...dataTable.columns],
                rows: [...dataTable.rows, ...total]
            })
        }, 3000)

    }, [])

    const pickdate = () => {
        const timestampStart = {
            date: new Date(startDate).getDate(),
            month: new Date(startDate).getMonth() + 1,
            year: new Date(startDate).getFullYear(),
        };
        const timestampEnd = {
            date: new Date(endDate).getDate(),
            month: new Date(endDate).getMonth() + 1,
            year: new Date(endDate).getFullYear(),
        };
        const filterDateIncome = incomeListDF.length > 0 && incomeListDF.filter(item => {
            const timestampItem = {
                date: new Date(item['date']).getDate(),
                month: new Date(item['date']).getMonth() + 1,
                year: new Date(item['date']).getFullYear(),
            };
            if (
                [timestampStart.date, timestampEnd.date].indexOf(timestampItem.date) != -1 &&
                [timestampStart.month, timestampEnd.month].indexOf(timestampItem.month) != -1 &&
                [timestampStart.year, timestampEnd.year].indexOf(timestampItem.year) != -1
            ) {
                return item
            } else if ((new Date(item['date']).getTime() >= new Date(startDate).getTime()) && (new Date(item['date']).getTime() <= new Date(endDate).getTime())) {
                return item
            }
        });

        const filterDateExpense = expenseListDF.length > 0 && expenseListDF.filter(item => {
            const timestampItem = {
                date: new Date(item['date']).getDate(),
                month: new Date(item['date']).getMonth() + 1,
                year: new Date(item['date']).getFullYear(),
            };
            if (
                [timestampStart.date, timestampEnd.date].indexOf(timestampItem.date) != -1 &&
                [timestampStart.month, timestampEnd.month].indexOf(timestampItem.month) != -1 &&
                [timestampStart.year, timestampEnd.year].indexOf(timestampItem.year) != -1
            ) {
                return item
            } else if ((new Date(item['date']).getTime() >= new Date(startDate).getTime()) && (new Date(item['date']).getTime() <= new Date(endDate).getTime())) {
                return item
            }
        });

        setincomeList(filterDateIncome)
        setexpenseList(filterDateExpense)
        setDataTable({
            columns: [...dataTable.columns],
            rows: [...filterDateExpense, ...filterDateIncome]
        })
    }

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
        <div className="container mt-3">
            <div className="row">
                <div className="row mx-4">
                    <div className="col-lg-2 col-xs-12 col-sm-12 col-md-12">
                        <h2 className="row  text-start text-success ">Total</h2>
                    </div>
                    <div className="col-lg-10 text-end col-xs-12 col-sm-12 col-md-12">
                        <small>From &nbsp; &nbsp; </small>
                        <Input className="btn border col-md-2 w-25 col-xs-12 col-sm-12 col-md-12" type="date" id="birthday" name="birthday" onChange={(e) => { setStartDate(e.target.value) }} ></Input>
                        <small>&nbsp; &nbsp; To&nbsp; &nbsp; </small>
                        <Input className="btn border col-md-2 w-25 col-xs-12 col-sm-12 col-md-12" type="date" id="birthday" name="birthday" onChange={(e) => { setEndDate(e.target.value) }} ></Input>
                        <button className="btn btn-info text-light mx-1" onClick={() => { pickdate() }}>search</button>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center mt-3">

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="ccard4 shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-start text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Date</div>
                                    <div class="text-start h5 mb-0 font-weight-bold text-gray-800">
                                        {startDate ? new Date(startDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'numeric', year: 'numeric' }) : 'Start'} - {endDate ? new Date(endDate).toLocaleDateString('th-TH', { year: 'numeric', month: 'numeric', day: 'numeric' }) : 'Present'}
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="ccard shadow h-100 py-2" >
                        <div class="card-body ">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-start text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Transaction</div>
                                    <div class="text-start h5 mb-0 font-weight-bold text-gray-800">{[...incomeList, ...expenseList].length}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-clipboard-list  fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="ccard2 border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-start text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Income</div>
                                    <div class="text-start h5 mb-0 font-weight-bold text-gray-800">{Sumincome()} Baht</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fab fa-btc fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="ccard3 border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-start text-xs font-weight-bold text-danger text-uppercase mb-1">
                                        Expense</div>
                                    <div class="text-start h5 mb-0 font-weight-bold text-gray-800">{Sumexpense()} Baht</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fab fa-btc fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div class="card col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center shadow mb-4 ">
                    <table className="table mt-2 ">
                        <thead>
                            <tr className="border-bottom">
                                <td className="border-bottom-0 text-start"><h4>Balance Summary</h4>  </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="border-bottom-0">
                                    <Chart
                                        // className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col"
                                        width={'300px!important'}
                                        height={'450px'}
                                        chartType="PieChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ['Task', 'Bant per Day'],
                                            ['Income', data['sumIncome']],
                                            ['Expense', data['sumExpense']],
                                        ]}
                                        options={{
                                            title: 'Total',
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <div className="col-lg-3"></div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg card text-center shadow mb-4">
                        <div className="d-flex mt-2 justify-content-center ">
                            <table className="table">
                                <thead>
                                    <tr className="border-bottom">
                                        <td className="border-bottom-0 text-start"><h4>Total Summary</h4>  </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td className="border-bottom-0">

                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-end h5 mb-0 font-weight-bold text-danger">{Sumtotal()}</div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fab fa-btc  fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    {lastTransaction()}
                </div>
            </div>


            <div className="container card  mt-3">
                <MDBDataTableV5
                    hover entriesOptions={[5, 20, 25]}
                    entries={5} pagesAmount={4}
                    data={dataTable}
                    searchTop
                    searchBottom={false}
                />

            </div>
        </div >

    )
}
export default DetailSummaries;
export { data }
