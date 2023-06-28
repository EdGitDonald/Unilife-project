import React from 'react'
import './Infobox.css'
import { HiOutlineBuildingOffice2, HiOutlineBookmark } from "react-icons/hi2";
import rectangle6 from '../../assets/Rectangle-6.png'


function Infobox() {




  return (
    <div className='infobox-container'>
         <div className='info-left'>
            <div className='textbox'>
            <div className='title'>
                <HiOutlineBuildingOffice2 className='icons'/>
                <h3>Best Selection</h3>
            </div>
            <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
            </div>

            <div className='textbox margin'>
            <div className='title'>
                <HiOutlineBookmark className='icons'/>
                <h3>Your favorite</h3>
            </div>
            <p>Shortlist your favourite properties and send enquiries in one click.</p>
            </div>
            
            <button className='button-detail'>Search and Compare</button>
         </div>
        <div>
            <img src={rectangle6} alt="img"/>
        </div>
    </div>
  )
}

export default Infobox