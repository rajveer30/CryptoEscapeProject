import React from 'react';
import "../Css/Services.css";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
     <div className='container-fluid services-outer'>
        <div class="container text-center services-inner">
  <div class="row align-items-center justify-content-around">
    <Link to="/marketOverView" class="col-lg-2 col-md-5 column">
    Market Overview
    </Link>
    <Link to="/buySell" class="col-lg-2 col-md-5 column">
      Buy/Sell
   </Link>
   <Link to="/news" class="col-lg-2 col-md-5 column">
      My Balance
    </Link>
    <Link to="/news" class="col-lg-2 col-md-5 column">
      News
    </Link>
  </div>
</div>
        </div>
     
    </>
  );
}

export default Services;
