import React, {useState} from 'react'
import './CityHomesCard.css'
import { useNavigate } from 'react-router-dom'
import { LuBedDouble, LuBath } from "react-icons/lu";
import { VscLocation} from "react-icons/vsc"
import { GoHome } from "react-icons/go";











function CityHomesCard({homes}) {

    //use on a tag to pull property id and navigate to home detail page
    const navigate = useNavigate()

    
  return (
    <div className='homesCard-container'>
        <img className='home-img' src={homes.images[1]}/>
        <div className='price-bed-bath'>
            <div className='price'>
            <p>£ {homes.rent}</p>
            <p>pppm including bills</p>
            </div>
            <div className='bed-bath'>
            <p className='flex'><span><LuBedDouble  className='icon'/></span>{homes.bedroom_count}</p>
            <p className='space flex'><span><LuBath  className='icon'/></span>{homes.bathroom_count}</p>
            </div>
        </div>
        <div className='home-furnish-location'>
        <div className='home-furnish'>
            <p>{homes.property_type}</p>
            <p>{homes.furnished}</p>
        </div>
        <div className='location'>
        
        <p className='flex'><span><VscLocation className='icon'/></span>{homes.address.street}{homes.address.postcode}</p>
        </div>
        </div>
        <div className='home-link'>
        <GoHome className='icon'/>
        <p className='view-home' onClick={() =>{navigate(`/HomeDetail/${homes._id}`)}}>View Home</p>
        </div>
      
    </div>
  )
}

export default CityHomesCard