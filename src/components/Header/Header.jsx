import React, {useContext, useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { CiHeart, CiMail } from "react-icons/ci";
import { BsHouses } from "react-icons/bs";
import Modal from 'react-modal'



function Header() {


  //create state to control Modal
  const [isOpen, setIsOpen] =  React.useState(false)

  Modal.setAppElement(document.getElementById('root'));

  return (
    <div className='header-container'>
      <Link to="/" className='header-link'>
        <div className='header'>
       <BsHouses className='sizing'/>
       <h1>UniLife</h1>
       </div>
      </Link>
       
        <div className='nav-container'>
        <p className='align'><span> <CiHeart className='sizing' /></span>Shortlist</p>
        <p className='align' onClick = {() => setIsOpen(true)}><span><CiMail className='sizing' /></span>Contact Us</p>


        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        // style={customStyles}
        contentLabel="Contact Us Modal"
      >
          <div className='modal-heading'>
        <div className='viewing-container'>
        <h2>Contact Us</h2>
        <p>Feel free to contact us if you have any questions.
Looking forward to hear from you.</p>
        </div>
        <button className="modal-close-btn" onClick={()=>setIsOpen(false)}>close</button>
      </div>
      <form className='form'>
        <div className='form-input'>
         <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="number" />
        </div>
        <div className='form-input'>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="10"></textarea>

          <button  className='modal-btn' type="submit">Submit</button>
        </div>

        </form>
        
      </Modal>
        </div>

        
        
    </div>
  )
}

export default Header