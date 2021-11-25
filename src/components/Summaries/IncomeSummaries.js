import React, { useState, useEffect } from 'react'
import { } from 'bootstrap'
import Chart from "react-google-charts"
import { MDBDataTableV5 } from 'mdbreact'
import { Input } from 'reactstrap'
import { getDatabase, ref, onValue, } from "@firebase/database"
import IncomeS from './IncomeS';

const IncomeSummaries = () => {
    const [incomesList, setincomesList] = useState([])
    const [incomeListDF, setincomeListDF] = useState([])
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const starCountRefIncome = ref(db, 'income');
        let total = [];
        onValue(starCountRefIncome, (snapshot) => {
            const data = snapshot.val();
            const income = Object.values(data)
            total.push(...income)
            setincomesList(income)
            setincomeListDF(income)
            setDataTable({
                columns: [...dataTable.columns],
                rows: [...dataTable.rows, ...income]
            })
        });
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

        setincomesList(filterDateIncome)
        setDataTable({
            columns: [...dataTable.columns],
            rows: [...filterDateIncome]
        })
        setChartData(filterDateIncome)
    }

    const Sumincome = () => {
        let sum = 0
        incomesList.map((item) => {
            sum += +item.amount
        })
        return (
            <span>
                {sum}
            </span>
        )
    }

    const lastTransaction = () => {
        const lastItem = incomesList && incomesList.reduce((prev, curr) => {
            const prevTimestamp = new Date(prev['date']) / 1000;
            const currTimestamp = new Date(curr['date']) / 1000;
            if (prevTimestamp > currTimestamp) {
                return prev
            } else {
                return curr
            }
        }, { date: incomesList[0] && incomesList[0]['date'] || null })
        console.log('lastItem', lastItem);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg card text-center shadow mb-4">
            <div className="d-flex mt-2 justify-content-center ">
                <table className="table">
                    <thead>
                        <tr className="border-bottom">
                            <td className="border-bottom-0 text-start"><h4>Recent transactions</h4>  </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row bg-table-body">
                            <td className="col-6 text-start">Date</td>
                            <td className="col-6 text-end ">{new Date(lastItem['date']).toLocaleDateString('en-EN', options)}</td>
                        </tr>
                        <tr className="row bg-table-body">
                            <td className="col-6 text-start">Detail</td>
                            <td className="col-6 text-end">{lastItem['category']}</td>
                        </tr>
                        <tr className="row bg-table-body">
                            <td className="col-6 text-start">Detail</td>
                            <td className="col-6 text-end">{lastItem['detail']}</td>
                        </tr>
                        <tr className="row bg-table-body">
                            <td className="col-6 text-start">Amount</td>
                            <td className="col-6 text-end">{lastItem['amount']}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    }

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

    const calIncomeChart = () => {
        const initArr = [
            ['Category', 'Income'],
        ];

        incomesList && incomesList.map((item) => {
            console.log(item);
            const category = item['category'].split(' ');
            const amount = (+item['amount']);
            const findCategory = initArr.findIndex(item => item[0].split(' ')[1] == category[1]);
            if (findCategory > 0) {
                const prevAmount = initArr[findCategory] && initArr[findCategory][1] || 0;
                initArr[findCategory][1] = prevAmount + amount
            } else {
                initArr.push([`${category[0]} ${category[1]} `, amount])
            }
        })
        if (chartData.length == 0 && initArr.length > 1) {
            setChartData(initArr);
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="row mx-4">
                    <div className="col-lg-2 col-xs-12 col-sm-12 col-md-12">
                        <h4 className="row  text-start text-primary ">Income</h4>
                    </div>
                    <div className="col-lg-10 text-end col-xs-12 col-sm-12 col-md-12">
                        <small>จาก&nbsp; &nbsp; </small>
                        <Input className="btn border col-md-2 w-25 col-xs-12 col-sm-12 col-md-12" type="date" id="birthday" name="birthday" onChange={(e) => { setStartDate(e.target.value) }} ></Input>
                        <small>&nbsp; &nbsp; ถึง&nbsp; &nbsp; </small>
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
                                    <div class="text-start h5 mb-0 font-weight-bold text-gray-800">{[...incomesList].length}</div>
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
            </div>

            {
                calIncomeChart()

            }
            <div className="row ">
                <div class="card col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center shadow mb-4 ">
                    <table className="table mt-2 ">
                        <thead>
                            <tr className="border-bottom">
                                <td className="border-bottom-0 text-start"><h4>Category Summary</h4>  </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="border-bottom-0">
                                    <Chart
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="Bar"
                                        loader={<div>Loading Chart</div>}
                                        data={[...chartData]}
                                        rootProps={{ 'data-testid': '2' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-lg-1"></div>

                {lastTransaction()}

            </div>

            <div className="container card mt-3">
                <MDBDataTableV5
                    hover entriesOptions={[5, 20, 25]}
                    entries={5} pagesAmount={4}
                    data={dataTable}
                    searchTop
                    searchBottom={false}
                />
            </div>
        </div>
    )
}
export default IncomeSummaries;