import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from 'reactstrap';

const Ledger = () => {
    const [rSelected, setRSelected] = useState(income);
    return (
        <div className="form-wrapper">
            <h1>Ledger</h1>
            <ButtonGroup>
                <Button color="primary" onClick={() => setRSelected(income)} >Income</Button>
                <Button color="primary" onClick={() => setRSelected(expense)} >Expense</Button>
            </ButtonGroup>
            <div>
                {rSelected}
            </div>
        </div >
    )
}
const income = () => {
    return (
        <div>
            <h1>Income</h1>
            <Form>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="date-in"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="time">Time</Label>
                    <Input
                        type="time"
                        name="time"
                        id="time-in"
                        placeholder="time placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" name="Category" id="category-in">
                        <option>Revenue</option>
                        <option>Business income</option>
                        <option>Refund</option>
                        <option>Borrow</option>
                        <option>Special</option>
                        <option>Free</option>
                        <option>Other</option>
                    </Input>
                    <Label for="Detail">Detail</Label>
                    <Input type="textarea" name="text" id="Detail-in" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplenumber">Amount</Label>
                    <Input
                        type="text"
                        name="number"
                        id="amount-in"
                        placeholder="How much?"
                    />
                    <Button color="info">Save</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    )
}
const expense = () => {
    return (
        <div>
            <h1>Expense</h1>
            <Form>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="time">Time</Label>
                    <Input
                        type="time"
                        name="time"
                        id="Time"
                        placeholder="time placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" name="Category" id="category">
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Accommodation</option>
                        <option>Shopping</option>
                        <option>Cure</option>
                        <option>Utilities</option>
                        <option>Service</option>
                        <option>Education</option>
                        <option>Family</option>
                        <option>Sport</option>
                        <option>Business</option>
                        <option>Tax</option>
                        <option>Lover</option>
                        <option>Borrowed</option>
                        <option>Refund</option>
                        <option>Pet</option>
                        <option>Donate</option>
                        <option>Other</option>
                    </Input>
                    <Label for="Detail">Detail</Label>
                    <Input type="textarea" name="text" id="Detail" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplenumber">Amount</Label>
                    <Input
                        type="text"
                        name="number"
                        id="amount"
                        placeholder="How much?"
                    />
                    <Button color="info">Save</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    )
}
export default Ledger;