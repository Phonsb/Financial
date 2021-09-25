import React, { useState } from 'react'
import "./Summaries.css"
import DetailSummaries from './DetailSummaries'
import GraphSummaries from './GraphSummaries'

const TotalSummaries = () => {
    const [rSelected, setRSelected] = useState(1);
    const selectab = () => {
        if (rSelected == 1)
            return <DetailSummaries/>
        else
            return <GraphSummaries/>
    }
    return (
        <div className="header-box mt-3 ">
            <h1>Total</h1>
            <div className="row d-flex justify-content-center">
            <button type="button" className="col-md-2 btn bg-info text-light " onClick={() => setRSelected(1)}>Detail</button>
            <button type="button" className="col-md-2 btn bg-warning text-light" onClick={() => setRSelected(2)} >Graph</button>
            </div>
            <div className="header-box">
                {selectab()}
            </div>
        </div>
    )
}
export default TotalSummaries;