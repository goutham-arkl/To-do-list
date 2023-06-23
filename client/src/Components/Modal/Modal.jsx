import { useContext, useState } from 'react';
import axios from '../../axios'
import './Modal.css'
import { AuthContext } from '../../Context/AuthContext';

const Modal = ({ isOpen, onClose,setIsOpen}) => {

   const[name,setName]=useState('')
   const[desc,setDesc]=useState('')
   const[err,setErr]=useState(false)
   const{currentUser}=useContext(AuthContext)

   const addTask=()=>{
    if(name===''){
      setErr(true)
      return
    }
    const obj={
      name:name,
      desc:desc
    }
    axios.post(`/task/${currentUser._id}`,obj,{headers:{"token":"Bearer "+localStorage.getItem('accessToken')}}).then((res)=>{
      setIsOpen(!isOpen)
      
    }).catch((err)=>{
      console.log(err)
    })

   }
  if (!isOpen) {
    return null; // If the modal is not open, don't render anything
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className='input-container'>
          {err && <span style={{color:"red"}}>Title cannot be empty</span>}
          <input className='modal-input' type='text' placeholder='Title' onChange={(e)=>setName(e.target.value)}/>
          <input className='modal-input' type='text' placeholder='Description' onChange={(e)=>setDesc(e.target.value)}/>

          <button className='modal-btn' onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
