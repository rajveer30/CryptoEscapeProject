import React, { useState } from 'react'
import "../Css/Convertor.css"
const Convertor = () => {
  const [toCurrency,setToCurrency]=useState("")
  const [fromCurrency,setFromCurrency]=useState("")
  const[amount,setAmount]=useState(0)
  const[result,setResult]=useState("")
const showToCurrencyName=(event) =>{
  setToCurrency(event.target.value);
}
const showFromCurrencyName=(event) =>{
  setFromCurrency(event.target.value);
}
const convert=()=>{
// console.log(amount)
fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${toCurrency}&tsyms=${fromCurrency}&api_key=638d0a52a9f175bcdf0cace7af6d0c3e5c494d875b1fb2e71881880add557e30`)
.then(response=>response.json())
.then(data =>{
  
  const rate=data[toCurrency][fromCurrency];
  const result=amount/rate;
  setResult(result);
  
})
.catch(console.log('error'));
}

  return (
    
    <>
      <div className='conv-outer'>
       <p className='conv-text'>Crypto Currency Convertor</p>
       <div className='conv-inner'>
        <label for="Amount" className='conv-txt'>Amount</label>
        <br/>
        <input  type='number' placeholder='Amount' value={amount} className='conv-from' onChange={(event)=>setAmount(event.target.value)}></input>
       </div>
       <div className=' conv-inner' >
                <label for="from" className='conv-txt'>From</label>
                <br/>
              
              <select name="fromCurrency" id="fromCurrency" onChange={showFromCurrencyName}>
                    <option value="USD" selected="">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="INR">INR - India Rupee</option>
                    <option value="NZD">NZD - New Zealand Dollar</option>
                    <option value="CHF">CHF - Swiss Franc</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                    <option value="BGN">BGN - Bulgarian Lev</option>
                    <option value="SGD">SGD - Singapore Dollar</option>
                    <option value="HKD">HKD - Hong Kong Dollar</option>
                    <option value="SEK">SEK - Swedish Krona</option>
                    <option value="THB">THB - Thai Baht</option>
                    <option value="HUF">HUF - Hungarian Forint</option>
                    <option value="CNY">CNY - Chinese Yuan Renminbi</option>
                    <option value="NOK">NOK - Norwegian Krone</option>
                    <option value="MXN">MXN - Mexican Peso</option>
                    <option value="GHS">GHS - Ghanians Cedi</option>
                    <option value="NGN">NGN - Nigerian Naira</option>
                </select>
    
                </div>
                <div className='conv-inner' >
              <label for="To" className='conv-txt'>To</label>
              <br/>
              

<select name="toCurrency" id="toCurrency" onChange={showToCurrencyName}>
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="USDT">Tether (USDT)</option>
                    <option value="BNB">Binance Coin (BNB)</option>
                    <option value="USDC">USD Coin (USDC)</option>
                    <option value="XRP">XRP (XRP)</option>
                    <option value="BUSD">Binance USD (BUSD)</option>
                    <option value="ADA">cardano (ADA)</option>
                    <option value="DOGE">Dogecoin (DOGE)</option>
                    <option value="MATIC">Polygon (MATIC)</option>
                    <option value="SOL">Solana (SOL)</option>
                    <option value="DOT">Polkadot (DOT)</option>
                    <option value="SHIB">Shiba Inu (SHIB)</option>
                    <option value="LTC">Litecoin (LTC)</option>
                    <option value="TRX">Tron (TRX)</option>
                    <option value="AVAX">Avalanche (AVAX)</option>
                </select>

                </div>
                <div className='convert-into'>{amount} {fromCurrency}={result} {toCurrency}</div>
           <button id="convert" onClick={convert}>Convert</button>
      </div>
    </>
  )
}


export default Convertor
