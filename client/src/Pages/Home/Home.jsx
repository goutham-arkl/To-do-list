import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Content from '../../Components/Content/Content'
import { useState } from 'react';
import Modal from '../../Components/Modal/Modal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='home-container'>
      <Navbar/>
      {!isOpen &&<div className='content'>
      <Content/>
      </div>}
      <div className='add-task' onClick={openModal}>
        <span>+</span>
      </div>

   
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={closeModal}/>
      
   
     
    </div>
  )
}

export default Home