import React, { useEffect, useState } from "react";
import "../Css/BuySell.css";
import axios from "axios";
const BuySell = () => {
  const [amount, setAmount] = useState("");
  const [currencyChange, setCurrencyChange] = useState("");
  const [amountUsd, setAmountUsd] = useState("");
  const [transaction,setTransaction]=useState({
    email:"",
    payment:{
      type:""
    }
  })
  useEffect(() => {
   setTransaction({...transaction,["email"]:localStorage.getItem('E-mail')}); 
  //  console.log(transaction);
  },[])
  useEffect(()=>{
        if(transaction.payment.type!==""){
          axios.post('http://localhost:2000/transaction',transaction)
          .then(res=>{console.log(res)})
          .catch(err=>{console.log(err)})
        }
      },[transaction.payment.type]
  )
  const showCurrencyChange = (event) => {
    setCurrencyChange(event.target.value);
  };
  const buy = () => {
    if (amount && currencyChange) {
      alert(`Purchase successful of ${currencyChange} of amount ${amount}`);
      changeAmount("buy");
      
    }
  };
  const sell = () => {
    if (amount && currencyChange) {
      alert(`Transaction  successful of ${currencyChange} of amount ${amount}`);
      changeAmount("sell");
     
    }
  };
  const changeAmount = (type) => {
   
    fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=INR&tsyms=${currencyChange}&api_key=638d0a52a9f175bcdf0cace7af6d0c3e5c494d875b1fb2e71881880add557e30`
    )
      .then((response) => response.json())
      .then(async (data) => {
        const rate = data["INR"][currencyChange];
        const result = amount / rate;
        setAmountUsd(result);
         setTransaction({...transaction,["payment"]:{
          coin:currencyChange,
          amount:amount,
          actualAmount:result,
          type:type
        }})
      // .catch(console.log("error"));
  });
}
  return (
    <>
      <div className="buysell-outer">
        <p className="buysell-text">BUY/SELL</p>

        <div className=" buysell-inner">
          <select
            name="coins"
            className="buysell-from"
            onChange={showCurrencyChange}
          >
            <option value="" disabled selected hidden>
              Select Coin{" "}
            </option>
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
        {/* <div className='conv-inner'>
                  
                  <input  type='number' placeholder='Amount in USD' className='buysell-amt'/>
                  <span  className='buysell-txt'>USD</span>
                </div> */}

        {/* <div className='buysell-into'>OR</div> */}

        <div className="buysell-inner">
          <input
            type="number"
            placeholder="Amount in Respective coin"
            className="buysell-from px-2"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          ></input>
        </div>
        <p className="amount-disp">Amount in INR:{amountUsd} </p>
        <button className="btn-buysell" onClick={sell}>
          SELL
        </button>
        <button className="btn-buysell" onClick={buy}>
          BUY
        </button>
      </div>
    </>
  );
};

export default BuySell;
