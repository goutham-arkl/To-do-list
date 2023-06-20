import './Navbar.css'
import Modal from '../Modal/Modal'



const Navbar = () => {

  return (
    <div className='nav-container'>
        <span className='logo'>TodoList</span>
        <div className='nav-rhs'>
        <span className='name'>Goutham A</span>
        <button className='logout'>Logout</button>
        </div>

    </div>
  )
}

export default Navbar