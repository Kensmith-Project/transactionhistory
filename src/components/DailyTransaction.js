import React from 'react'

export default function DailyTransaction({date,data,  ke}) {
  return (
    <div className='daily-transact' key={ke}>
        <h3 className='date'>{date}</h3>

        { data.map((item)=>{
            const {id, name,status, Type}= item
            return<div className='data-body' key={id}>

            <div className='side-box'></div>
            <div className='data-box'>
                <p> {name}</p>
                <p>{Type}</p>
                <p>{status}</p>
            </div>
        </div>
        })}
        
    </div>
  )
}
