import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Planning = (props) => {
    return (
        <div className="form-wrapper">
            <h1>Financial Planning</h1>
            <Form>
            <FormGroup>
                    <Label for="exampleTopic">Topic</Label>
                    <Input
                        type="text"
                        name="number"
                        id="Topic"
                        placeholder="Topic of planning"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="date placeholder"
                    />
                    <FormGroup>
                        <Label for="exampleSelect">Select the type of collection</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Day</option>
                            <option>Week</option>
                            <option>Month</option>
                            <option>Year</option>
                        </Input>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="examplenumber">Amount</Label>
                    <Input
                        type="password"
                        name="number"
                        id="amount-in"
                        placeholder="How much?"
                    />
                    <Button color="info">Save</Button>{' '}
                </FormGroup>
            </Form>
        </div >
    )
}
export default Planning;