import React, {useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { CiHeart, CiMail } from "react-icons/ci";
import { BsHouses } from "react-icons/bs";



function Header() {
  return (
    <div className='header-container'>
      <Link to="/" className='header-link'>
        <div className='header'>
       <BsHouses className='sizing'/>
       <h1>UniLife</h1>
       </div>
      </Link>
       
        <div className='nav-container'>
        <CiHeart className='sizing' /><p>Shortlist</p>
        <CiMail className='sizing' /><p>Contact Us</p>
        </div>

        
        
    </div>
  )
}

export default Header