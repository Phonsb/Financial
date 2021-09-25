import React from 'react'

const ExpenseS = ({expen}) => {
    return (
      <div className="">
      <table className="table justify-content-start"> 
        <tbody>
          <tr className="row">
            <td className="col-md-4">{expen.date}</td>
            <td className="col-md-3 ">{expen.category}</td>
            <td className="col-md-3 ">{expen.detail}</td>
            <td className="col-md-2 ">{expen.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
      )
}
export default ExpenseS;