import React, { useContext, useState } from 'react';
import './LoginForm.css'; // Import the CSS file for the component
import { AuthContext } from '../../Context/AuthContext';
import {Link} from 'react-router-dom'

const LoginForm = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const{login}=useContext(AuthContext)
  const handleLogin=()=>{
    const obj={
      email:email,
      password:password
    }
    
   login(obj)
  }
  
  return (

    <div className='login-form-container'>
        <div className='heading'>Login</div>
      <div className='inputs-container'>
        <div className='login-input-container'>
          <label>Email</label>
          <input className='login-input' type='text' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='login-input-container'>
          <label>Password</label>
          <input className='login-input' type='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
      </div>
      <button className='login-btn' onClick={handleLogin}>Login</button>
      <span style={{marginTop:"10px"}}>Not registered ?<Link to={'/register'}>Register</Link> </span>
    </div>
  );
};

export default LoginForm;
