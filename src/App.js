import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Convertor from './Components/Convertor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tracker from './Components/Tracker'
import CoinPage from './Components/CoinPage'
import CurrencyContext from './Components/CurrencyContext'
import BuySell from './Components/BuySell'
import UserNavbar from './Components/UserNavbar'
import Services from './Components/Services'
import Corosol from './Components/Corosol';
import Footer from './Components/Footer';
import Intro from './Components/Intro'
import convertor from './Components/Convertor'
import CryptoNews from './Components/CryptoNews'
import Market from './Components/Market'
import Main from './Components/Main'
import BuySellMain from './Components/BuySellMain'
import MyBalance from './Components/MyBalance'


export default function App() {
  return (
    <>
    <BrowserRouter>
       <Routes> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/cryptoEscape' element={<Main/>}></Route>
      <Route path='/marketOverView' element={<Market/>}></Route>
      <Route path='/news' element={<CryptoNews/>}></Route>
      <Route path='/buySell' element={<BuySellMain/>}></Route>
      <Route path='/myBalance' element={<MyBalance/>}></Route>
      </Routes> 
      </BrowserRouter>  
      
      

      
    </>
  )
}
