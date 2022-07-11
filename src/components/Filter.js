import React from 'react'

function Filter() {
  return (
    <div className='filter-section'>
    <button className='filter'  type={'button'} title='All'>
      All
      
    </button>
    <button className='filter' placeholder='Successful' title='Successful'>Successful</button>
    <button className='filter' placeholder='Debit'>Debit</button>
    <button className='filter' placeholder='Credit'>Credit</button>
    <button className='filter' placeholder='Failed'>Failed</button>
  </div>
  )
}

export default Filter