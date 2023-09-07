import React from 'react';
import BuySell from './BuySell';
import Convertor from './Convertor';
import UserNavbar from'./UserNavbar';
import Footer from './Footer';
import '../Css/BuySellmain.css';
const BuySellMain = () => {
  return (
    <>
    <UserNavbar/>
    <div className='container-fluid buySell-outerp'>
     <div className='row justify-content-around'>
        <div className='col-lg-6 col-md-8 BuySell-inner my-4'>
            <BuySell/>
        </div>
        
        <div className='col-lg-4 col-md-8 BuySell-inner my-4'>
            <Convertor/>
        </div>
     </div>

    </div>
    <Footer/>

      
    </>
  );
}

export default BuySellMain;
