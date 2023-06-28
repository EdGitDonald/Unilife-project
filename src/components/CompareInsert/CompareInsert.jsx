import React from 'react'
import { BsSearch } from "react-icons/bs"
import { IoIosList } from "react-icons/io";
import { TfiNotepad } from "react-icons/tfi";








import './CompareInsert.css'

function CompareInsert() {
  return (
    <div className='compare-container'>
    <h2>Compare all inclusive student homes</h2>
    <div className='info-box'>
    <div className='search-container spacing'>
        <BsSearch className='main'/>
        <h3>Search</h3>
        <p>Find your dream home in the perfect area near your university. </p>
     </div>
     <div className='spacing'>
        <IoIosList className='main'/>
        <h3>Compare</h3>
        <p>Compare student accommodation to find the right home for you</p>
     </div>
     <div className='spacing'>
        <TfiNotepad className='main'/>
        <h3>Bills included</h3>
        <p>Bills are included in all rent prices. No hidden fees.</p>
     </div>
    </div>
    </div>
  )
}

export default CompareInsert
