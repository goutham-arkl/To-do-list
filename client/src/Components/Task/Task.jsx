import { useState } from 'react'
import './Task.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Task = () => {
    const[completed,setCompleted]=useState(false)
    const handelclick=()=>{
        setCompleted(!completed)
       

    }
    const item={
        name:"Read",
        desc:"Read 2 pages of Atomic habbits"
    }
  return (
    <div className='task-container'>
        <div className='details'>
            <span className='task-name'>
             {completed ? <strike >{item.name}</strike> :item.name}
            </span>
            <p className='task-description'>
            {completed ? <strike>{item.desc}</strike> :item.desc}
            </p>
        </div>
        <div className='actions-container'>

       

            <label class="switch">
            <input type="checkbox" onChange={()=>handelclick()}/>
            <span class="slider"></span>
          </label>

          <DeleteIcon className='delete-icon' style={{
            width: "35px",
            height: "30px",
            color:"#d32f2f",
            cursor:"pointer",
            marginBottom:"6px"
            }}/>
      

        </div>
    </div>
  )
}

export default Task