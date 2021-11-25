import React, { useState, useEffect } from 'react'
import { } from 'bootstrap'
import { Skeleton, Switch, Card, Avatar, Button, Radio } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getDatabase, ref, onValue, } from "@firebase/database";

const CradP = ({ planr }) => {
  const [expenseList, setexpenseList] = useState([]);
  const [amountValue, setAmount] = useState(0);
  useEffect(() => {
    const db = getDatabase();
    const starCountRefExpense = ref(db, 'expense');
    onValue(starCountRefExpense, (snapshot) => {
      const data = snapshot.val(); console.log();
      const expense = Object.values(data)
      setexpenseList(expense)
    });
  })

  const ResultPlanning = () => {
    let amount = []
    expenseList && expenseList.filter(expenseItem => expenseItem['category'].split(' ')[1] == planr['toppic'] && amount.push(expenseItem['amount']))
    amount = amount.reduce((a, b) => (+a) + (+b), 0)
    return (
      <span>{(+planr.amount) - amount}</span>
    )
  }

  const Result = () => {
    let amount = []
    expenseList && expenseList.filter(expenseItem => expenseItem['category'].split(' ')[1] == planr['toppic'] && amount.push(expenseItem['amount']))
    amount = amount.reduce((a, b) => (+a) + (+b), 0)
    return (
      <span>{amount}</span>
    )
  }

  return (
    <div className="container  mt-3 mx-3 rounded">
      <div className="row ">
        <div className="col-12  border bg-table rounded">
          <table className="table  ">
            <thead className="">
              <tr className="row " >
                <th className="col-12 mt-2 mx-2 border-bottom-0"><h4>{planr.toppic}</h4> </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="row bg-table-body">
                <td className="col-6">Planning Date</td>
                <td className="col-6 text-end ">{planr.date}</td>
              </tr>
              <tr className="row bg-table-body">
                <td className="col-6">Detail</td>
                <td className="col-6 text-end">{planr.detail}</td>
              </tr>
              <tr className="row bg-table-body">
                <td className="col-6">Amount</td>
                <td className="col-6 text-end">{planr.amount}</td>
              </tr>
              <tr className="row bg-table-body">
                <td className="col-6">Repository type</td>
                <td className="col-6 text-end">{planr.type}</td>
              </tr>
              <tr className="row bg-table-body">
                <td className="col-6">Amount collected</td>
                <td className="col-6 text-end">{Result()}</td>
              </tr>
              <tr className="row bg-table-body">
                <td className="col-6 border-bottom-0 ">Balance</td>
                <td className="col-6 border-bottom-0  text-end">{ResultPlanning()}</td>
              </tr>

            </tbody>
            <tfoot>
              <tr className="row text-center bg-table ">
                <td className="col-12 border-bottom-0 mt-3 ">
                  <Button className="rounded bg-primary text-light bg-table-foot" type="button" shape="round" icon={<EditOutlined />} />
                  <Button className="rounded bg-danger text-light bg-table-foot" type="button" shape="round" icon={<DeleteOutlined />} />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>





    </div>
  )
}
export default CradP;