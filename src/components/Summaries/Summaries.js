import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import "./Summaries.css"
import TotalSummaries from './TotalSummaries'
import IncomeSummaries from './IncomeSummaries'
import ExpenseSummaries from './ExpenseSummaries'


const Summaries = () => {
    const [rSelected, setRSelected] = useState(1);
    const selectab = () => {
        if (rSelected == 1)
            return <TotalSummaries />
        else if (rSelected == 2)
            return <IncomeSummaries />
        else
            return <ExpenseSummaries/>
    }
    return (
        <div className="form-wrapper header-box">
            <h1>Summaries</h1>
            <ButtonGroup>
                <Button color="primary" onClick={() => setRSelected(1)} >Total</Button>
                <Button color="primary" onClick={() => setRSelected(2)} >Income</Button>
                <Button color="primary" onClick={() => setRSelected(3)} >Expense</Button>
            </ButtonGroup>
            <div className="header-box">
                {selectab()}
            </div>
        </div >
    )
}

export default Summaries;