import React, { useState, useEffect } from 'react'
import { } from 'bootstrap'
import { getDatabase, ref, onValue, remove } from "@firebase/database";
import { } from './Planning.css'

const ListPayment = ({ planr }) => {
  const [expenseList, setexpenseList] = useState([]);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  useEffect(() => {
    const db = getDatabase();
    const starCountRefExpense = ref(db, 'expense');
    onValue(starCountRefExpense, (snapshot) => {
      const data = snapshot.val(); console.log();
      const expense = Object.values(data)
      setexpenseList(expense)
    });
  })

  const ResultPercen = () => {
    let amount = []
    expenseList && expenseList.filter(expenseItem => expenseItem['category'].split(' ')[1] == planr['toppic'] && amount.push(expenseItem['amount']))
    amount = amount.reduce((a, b) => (+a) + (+b), 0)
    return (1-(((planr.amount) - amount)/planr.amount))*100
    
  }

  const Result = () => {
    let amount = []
    expenseList && expenseList.filter(expenseItem => expenseItem['category'].split(' ')[1] == planr['toppic'] && amount.push(expenseItem['amount']))
    amount = amount.reduce((a, b) => (+a) + (+b), 0)
    return (
      <span>{amount}</span>
    )
  }

  const DeletePlanning = () => {
    const db = getDatabase();
    remove(ref(db, `planning/${planr.toppic}`))
  }

  return (
    <div class="col-12 col-sm-6 col-lg-3 p-3">
      <div className='border shadow rounded p-3 position-relative'>
      <div className='position-absolute d-flex top-0 end-0'>
         <a href={`/Transaction?m=2&c=${planr.toppic}`} type="button" class="btn btn-primary fs-6"><i class="fas fa-donate"></i></a>
         <button onClick={DeletePlanning} type="button" class="btn btn-danger fs-6"><i class="fas fa-trash-alt"></i></button>
         </div>
        <div className='d-flex justify-content-between'>
        <div className='text-start fs-3'>{planr.toppic}</div>
        
        </div>
        <div className='text-black-50 text-start'>{new Date(planr.date).toLocaleDateString('en-EN', options)}</div>
        <div className='text-start mt-4'>
          <span className='text-black-50'>฿</span>
          <span className='fw-bold fs-5'>{Result()}</span>
          <span className='text-black-50'>/</span>
          <span className='text-black-50'>{planr.amount}</span>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${ResultPercen()}%` }}></div>
        </div>
      </div>
    </div>
  )
}
export default ListPayment;