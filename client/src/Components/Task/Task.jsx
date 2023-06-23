import { useContext, useState } from "react";
import "./Task.css";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "../../axios";
import { AuthContext } from "../../Context/AuthContext";

const Task = ({ task }) => {
  const{reload,setReload}=useContext(AuthContext)
  const handelclick = () => {
    axios.put((`/task/${task._id}`)).then((res)=>{
      setReload(!reload)
    }).catch((err)=>{
      console.log(err)
    })
  };

  const handleDelete=()=>{
    axios.delete(`/task/${task._id}`).then((res)=>{
      console.log('task removed')
      setReload(!reload)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="task-container">
      <div className="details">
        <span className="task-name">
          {task.completed ? <strike>{task.name}</strike> : task.name}
        </span>
        <p className="task-description">
          {task.completed ? <strike>{task.desc}</strike> : task.desc}
        </p>
      </div>
      <div className="actions-container">
        <label class="switch">
          <input type="checkbox" checked={task.completed ?true:false} onChange={() => handelclick()} />
          <span class="slider"></span>
        </label>

        <DeleteIcon onClick={handleDelete}
          className="delete-icon"
          style={{
            width: "35px",
            height: "30px",
            color: "#d32f2f",
            cursor: "pointer",
            marginBottom: "6px",
          }}
          
        />
      </div>
    </div>
  );
};

export default Task;
