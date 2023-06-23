import { useState } from "react";
import "./RegisterForm.css";
import axios from '../../axios'
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const RegisterForm = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPasword]=useState('')
    const[mobile,setMobile]=useState('')
    const navigate=useNavigate()

    const handleRegister=async()=>{

        const obj={
            name:name,
            email:email,
            password:password,
            mobile:mobile
        }
          if(Object.values(obj).includes('')){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You should fill every fields',
              
            })
            
          }
        try {
            await axios.post('/auth/register',obj).then((res)=>{
                navigate('/login')
            })
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div className="reg-form-container">
     <div className="reg-wrapper">
     <div className="reg-input-container">
     <label>Name</label>
     <input type="text" onChange={(e)=>setName(e.target.value)}/>
   </div>

   <div className="reg-input-container">
     <label>Email</label>
     <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
   </div>

   <div className="reg-input-container">
     <label>Password</label>
     <input type="password" onChange={(e)=>setPasword(e.target.value)}/>
   </div>

   <div className="reg-input-container">
     <label>Mobile No.</label>
     <input type="text" onChange={(e)=>setMobile(e.target.value)}/>
   </div>
   <button className="login-btn" onClick={handleRegister}>Register</button>
   <span style={{marginTop:"1px",marginBottom:"5px"}}>Already have an account ? <Link to={'/login'}> Login </Link></span>
     </div>
    </div>
  );
};

export default RegisterForm;
