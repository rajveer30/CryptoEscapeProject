import React, { useState } from 'react'
import "../Css/signup.css"
import home_img from "../photos/home-img2.jpg"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
const Signup = () => { //component
  const [user,setUser]=useState({username:"",email:"",password:"",repassword:""})
  const handler = (event) =>{
    const{name,value}=event.target;
    setUser({...user,[name]:value})
    
  }
  const submitHandler=(event)=>{ //function
    event.preventDefault();
    if(user.username && user.email && user.password && user.repassword &&user.password===user.repassword){
      // console.log(user);
      axios.post('http://localhost:2000/signup',user)
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
      setUser({
        username:"",email:"",password:"",repassword:""
      })
    }
    else{
      alert("Invalid credentials");
    }
    
  }
  return (
    <>
    <Navbar/>

    <div class="container-fluid home">
  <div class="row ">
    <div class="col">
    <div className='home-outer'>
        <div className='home-login'>Sign Up</div>
        <div className='home-inner'>
            <form className='home-log'>
            <div >
                <label for= "name">Username :</label>
                <input  type='text' placeholder='Name ' id='name'name='username'value={user.username} onChange={handler} required />
                </div>
                <div >
                <label for= "email">E-mail id :</label>
                <input  type='email' placeholder=' E-mail' id='email' name='email' value={user.email} onChange={handler} required/>
                </div>
                <div>
                <label for="password">Password :</label>
               <input  type='password' placeholder='password' id='password'name='password' value={user.password} onChange={handler} required/>
               </div>
               <div>
                <label for="password">Re-Password :</label>
               <input  type='password' placeholder='password' id='password' name='repassword' value={user.repassword} onChange={handler} required/>
               </div>

             <button id='btn'type='submit'onClick={submitHandler}>Signup</button>
             <p>Already have an account?
             <Link to='/'>  login </Link></p>
            </form>
        </div>
     </div>
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
  )
}

export default Signup