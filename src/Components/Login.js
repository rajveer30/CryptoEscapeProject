import React, { useState } from 'react';
import "../Css/home.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = (props) => { 
    
    const[user,setUser]=useState({email:"",password:""})
    const handler= (event) =>{
        const{name,value}=event.target;
        setUser({...user,[name]:value})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(user.email && user.password){
            axios.post("http://localhost:2000/login", user)
            .then(res => {
               console.log(res)
               props.checkLogin(true);
               localStorage.setItem('E-mail', user.email); 
               localStorage.setItem('isLogin',true); 
            })
            .catch(err => {
                console.log(err);
                // alert("invalid credentials");
            })
           

        }
        else{
            alert("Invalid credentials");
        }
    }
  return (
    <>
    
    <div className='home-outer'>
        <div className='home-login'>Login</div>
        <div className='home-inner'>
            <form className='home-log'>
                <div >
                <label for= "email">E-mail Id</label>
                <input  type='email' placeholder='Email' id='email'name='email'value={user.email} onChange={handler} required />
                </div>
                <div>
                <label for="password">Password</label>
               <input  type='password' placeholder='password' id='password'name='password' value={user.password} onChange={handler} required/>
               </div>

             <button id='btn' type="submit" onClick={submitHandler}>Login</button>
             <p>don't have an account?
             <Link to='/signup'>  Register </Link></p>
            </form>
        </div>
     </div>
    
      
    </>
  );
}

export default Login;
