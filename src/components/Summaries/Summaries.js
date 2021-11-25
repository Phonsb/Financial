import React, { useState } from 'react'
import {
    Button, ButtonGroup, Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown
} from 'reactstrap';
import "./Summaries.css"
import TotalSummaries from './TotalSummaries'
import IncomeSummaries from './IncomeSummaries'
import ExpenseSummaries from './ExpenseSummaries'
import DetailSummaries from './DetailSummaries';



const Summaries = () => {
    const [rSelected, setRSelected] = useState(1);
    const selectab = () => {
        if (rSelected == 1)
            return <DetailSummaries />
        else if (rSelected == 2)
            return <IncomeSummaries />
        else
            return <ExpenseSummaries />
    }
    return (
        <div className="container mt-3 form-wrapper header-box">
            <div className="row">
                <h1 className="col text-start ">Summaries</h1>
                <div className="col text-end">
                    <ButtonGroup>
                        <Button color="primary" onClick={() => setRSelected(1)} >Total</Button>
                        <Button color="primary" onClick={() => setRSelected(2)} >Income</Button>
                        <Button color="primary" onClick={() => setRSelected(3)} >Expense</Button>
                    </ButtonGroup>
                </div>
            </div>





            <div className="header-box">
                {selectab()}
            </div>
        </div >
    )
}

export default Summaries;