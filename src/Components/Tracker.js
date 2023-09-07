import React, { useContext } from 'react'
import "../Css/Tracker.css"
import CurrencyContext from './CurrencyContext'
const Tracker = () => {
  const {currency,symbol,setCurrency}=useContext(CurrencyContext)
  return (
    
    <div className='tracker'>
        <div className='track-btn'>
         <select name="currency" id="currency">
          <option value="INR">INR</option>
          <option value="USD">USD</option>
         </select>
        </div>
      
    </div>
  )
}

export default Tracker
