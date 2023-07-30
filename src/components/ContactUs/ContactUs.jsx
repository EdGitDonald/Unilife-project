import React from 'react'
import './ContactUs.css'
import { BsFacebook} from "react-icons/bs";
import { AiFillTwitterCircle , AiFillInstagram } from "react-icons/ai";



function ContactUs() {
  return (
    <div className='contact-container'>
        <div className='email-input'>
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type='email' placeholder='Your Email'/>
        </div>
        <div className='social-links'>
            <h3>Let's Socialize</h3>
            <p className='flex'><span><BsFacebook className='icon'/></span>Facebook</p>
            <p className='flex'><span><AiFillTwitterCircle className='icon'/></span>Twitter</p>
            <p className='flex'><span><AiFillInstagram className='icon'/></span>Instagram</p>
        </div>
        
    </div>
  )
}

export default ContactUs