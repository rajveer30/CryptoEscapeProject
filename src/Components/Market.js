import React, { useEffect, useState } from 'react';
import '../Css/Market.css'
import TopCrypto from './TopCrypto';
import Footer from './Footer';
import UserNavbar from './UserNavbar'
const Market = () => {
    const [coinData,setCoinData]=useState([])
    useEffect(()=>{
        fetch("https://api.coinlore.net/api/tickers/?start=0&limit=15")
        .then(res=>res.json())
        .then(list=>setCoinData(list.data))
        .catch((err) => console.log(err));
    },[])

    
    // const mapTable=(data)=>{
     const element= coinData?.map(
        (coin)=>{
            return(
            <tr>

            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{coin.rank}</td>
            <td>{coin.price_usd}</td>
            <td>{coin.market_cap_usd}</td>
            <td>{coin.percent_change_24h}</td>
            <td>{coin.percent_change_1h}</td>
            <td>{coin.percent_change_7d}</td>
          </tr> )
        }
      )
    
console.log(coinData);
  return (
    
    <>
    <UserNavbar/>
    <div className=' market'>
        <div className=' market-upper'>
            <iframe  src='https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover='></iframe>
        </div>
        <TopCrypto/>
        <div className='container market-overview'>

        <h1>Market Overview</h1></div>
        <div className='container market-table'>
        <table class="table table-border">
  <thead>
    <tr className='table-row'>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col">Rank</th>
      <th scope="col">Price(USD)</th>
      <th scope="col">Market Capital(USD)</th>
      <th scope="col">% change(24hr)</th>
      <th scope="col">% change(1hr)</th>
      <th scope="col">% change(7 Days)</th>  
    </tr>
  </thead>
  <tbody>
    {element}
  </tbody>
</table>
        </div>

         </div>
         <Footer/>  



    </>
  );
}

export default Market;
