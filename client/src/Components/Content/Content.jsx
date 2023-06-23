import { useContext, useEffect, useState } from 'react'
import Task from '../Task/Task'
import './Content.css'
import {AuthContext} from '../../Context/AuthContext'
import axios from '../../axios'

const Content = () => {
  const {currentUser,reload,setReload}=useContext(AuthContext)

  const [tasks,setTasks]=useState([]);
  const[search,setSearch]=useState('')
  const [filteredTasks,setFilteredTasks]=useState([])

  const handleSearch=async(e)=>{
    const searchTerm=e.target.value
    setSearch(searchTerm)
    console.log(search)
    if(search===''){
      setFilteredTasks(false)
      return
    }
    
    const filteredArray = tasks.filter((item) => {
      return (item.name.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase())) && item.userId === currentUser._id;
    });
    
    setFilteredTasks(filteredArray)
    
  }

  useEffect(() => {
    const fetchTasks = async () => {
      console.log(currentUser);
      
  
      try {
        const response = await axios.get(`task/${currentUser._id}`);
        setTasks(response.data);
        setFilteredTasks(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchTasks();
  }, [reload, currentUser]);
  
  

  return (
    <div className='content-container'>
        <div className='searchbar-container'>
          <input className='search' onChange={(e)=>handleSearch(e)} type='text' placeholder='Search'/>
        </div>
        <div className='tasks-list-container'>
        {filteredTasks ? filteredTasks.map((item)=>(

          <Task key={item.name} task={item}/>
        )) 
        :tasks.map((item)=>(

          <Task key={item.name} task={item}/>
        )) }
       


        </div>
    </div>
  )
}

export default Content