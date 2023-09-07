import React from 'react';
import "../Css/Market.css"

const TopCrypto = () => {
  return (
    <>
      <div className=' container top-crypto-outer'>
        <h1 className='crypto-name-outer'>Top Performing Crypto's</h1>
        <div className='row '>
            <div className='col-md-4 col-sm-5 my-2 '>
             <iframe src='https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=859&pref_coin_id=1505'></iframe>

            </div>
            <div className='col-md-4 col-sm-5 my-2'>
              <iframe src='https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=145&pref_coin_id=1505'></iframe>  
            </div>
            <div className='col-md-4 col-sm-5 my-2'>
                <iframe src='https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=637&pref_coin_id=1505'></iframe>
            </div>

            <div className='col-md-4 col-sm-5 my-2'>
             <iframe src='https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=1209&pref_coin_id=1505'></iframe>

            </div>
            <div className='col-md-4 col-sm-5 my-2'>
              <iframe src='https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=648685&pref_coin_id=1505'></iframe>  
            </div>
            <div className='col-md-4 col-sm-5 my-2'>
                <iframe src='https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=619&pref_coin_id=1505'></iframe>
            </div>
</div>
        
      </div>
    </>
  );
}

export default TopCrypto;
