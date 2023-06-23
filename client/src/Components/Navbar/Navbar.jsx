import './Navbar.css'
import Modal from '../Modal/Modal'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import Swal from 'sweetalert2'



const Navbar = () => {
  const{setCurrentUser}=useContext(AuthContext)
  const handleLogout=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Logout",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('accessToken')
        localStorage.setItem('user',false)
        setCurrentUser(false)
       
      }
    })

   
  }

  return (
    <div className='nav-container'>
        <span className='logo'>TodoList</span>
        <div className='nav-rhs'>
        <span className='name'>Goutham A</span>
        <button className='logout' onClick={handleLogout}>Logout</button>
        </div>

    </div>
  )
}

export default Navbar