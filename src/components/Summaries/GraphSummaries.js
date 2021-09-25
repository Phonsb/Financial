import React, { useState, useEffect } from 'react'
import { } from 'bootstrap'
import Chart from "react-google-charts";
import {data} from './DetailSummaries'

const GraphSummaries = () => {
    return (
        <div className="d-flex mt-2 justify-content-center ">
            <Chart
                width={'800px'}
                height={'500px'}
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
        </div>
    )
}
export default GraphSummaries;