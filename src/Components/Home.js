import React, { useEffect } from 'react'
import "../Css/home.css"
import home_img from "../photos/home-img2.jpg"
import Login from './Login'
import Navbar from './Navbar'
import Main from './Main'
import { useState } from "react"
import { set } from 'mongoose'
const Home = () => {
  const[isLogin,setIsLogin]=useState(false);
 const checkLogin=(loginInfo)=>{
  setIsLogin(loginInfo); 
 }
 useEffect(()=>{
  if(localStorage.getItem("isLogin"))
  setIsLogin(true);
  else  
  setIsLogin(false)
 })
  return (
!isLogin?
    <>
    <Navbar/>
    <div class="container-fluid home">
  <div class="row ">
    <div class="col">
    <Login checkLogin={checkLogin}/>
    
    </div>
    <div class="col">
      <div className='home2'>
        <div className='home2-txt'>A simple and smart way to start your journey in cryptocurencies...</div>
         <img src={home_img} className='home2-img' placeholder='image'></img>

      </div>

    </div>
  </div>
</div>
    
   </>
   :<Main checkLogin={checkLogin}/>
  )
}

export default Home
