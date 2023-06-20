import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Content from '../Components/Content/Content'
import { useState } from 'react';
import Modal from '../Components/Modal/Modal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='home-container'>
      <Navbar/>
      <div className='content'>
      <Content/>
      </div>
      <div className='add-task' onClick={openModal}>
        <span>+</span>
      </div>

   
      <Modal isOpen={isOpen} onClose={closeModal}>
      <h2 style={{color:"white"}}>Modal Content</h2>
      <p>This is the content of the modal.</p>
    </Modal>
      
   
     
    </div>
  )
}

export default Home