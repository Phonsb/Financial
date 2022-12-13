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
import Loan from './Loan'
import Credit from './Credit'
import Percentage from './Percentage'
import Personal from './Personal'
import Stapper from './Stapper'


const Calculator = () => {
    const [rSelected, setRSelected] = useState(1);
    const selectab = () => {
        if (rSelected == 1)
            return <Stapper />
        else if (rSelected == 2)
            return <Percentage />
        else if (rSelected == 3)
            return <Credit />
    }
    return (
        <div className="container mt-3 form-wrapper header-box pb-5">
            <div className="row">
                <h1 className="col text-start ">Calculator</h1>
                <div className="col text-end">
                    <ButtonGroup>
                        <Button color={rSelected === 1 ? "success" : "secondary"} onClick={() => setRSelected(1)} >Personal Income Tax</Button>
                        <Button color={rSelected === 2 ? "primary" : "secondary"} onClick={() => setRSelected(2)} >Percentage</Button>
                        <Button color={rSelected === 3 ? "danger" : "secondary"} onClick={() => setRSelected(3)} >Credit Card</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className="header-box">
                {selectab()}
            </div>
        </div >
    )
}

export default Calculator;