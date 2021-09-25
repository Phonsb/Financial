import React from 'react'
import { } from 'bootstrap'

const IncomeS = ({inco}) => {
    return (
        <div className="">
          <table className="table justify-content-start"> 
            <tbody>
              <tr className="row">
                <td className="col-md-4">{inco.date}</td>
                <td className="col-md-3 ">{inco.category}</td>
                <td className="col-md-3 ">{inco.detail}</td>
                <td className="col-md-2 ">{inco.amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      )
}
export default IncomeS;