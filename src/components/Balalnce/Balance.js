import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import Chart from "react-google-charts";

const Balance = () => {
    const [rSelected, setRSelected] = useState(Totalbalalnce);
    return (
        <div className="form-wrapper">
            <h1>Balance</h1>
            <ButtonGroup>
                <Button color="primary" onClick={() => setRSelected(Totalbalalnce)} >Total</Button>
                <Button color="primary" onClick={() => setRSelected(incomebalalnce)} >Income</Button>
                <Button color="primary" onClick={() => setRSelected(expensebalalnce)} >Expense</Button>
            </ButtonGroup>
            <div>
                {rSelected}
            </div>
        </div >
    )
}

const Totalbalalnce = () => {
    return (
        <div>
            <h1>Total</h1>
            <Button color="info">Detal</Button>
            <Button color="warning">Graph</Button>
            <di>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Bant per Day'],
                        ['Income', 2000],
                        ['Epense', 200],
                    ]}
                    options={{
                        title: 'Total',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </di>
        </div>
    )
}
const incomebalalnce = () => {
    return (
        <div>
            <h1>Income</h1>
        </div>
    )
}

const expensebalalnce = () => {
    return (
        <div>
            <h1>Expense</h1>
        </div>
    )
}

export default Balance;