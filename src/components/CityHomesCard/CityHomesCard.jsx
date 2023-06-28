import React from 'react'
import './CityHomesCard.css'

function CityHomesCard({homes}) {
  return (
    <div className='homesCard-container'>
        <img className='home-img' src={homes.images[1]}/>
        <div className='price-bed-bath'>
            <div>
            <p>£ {homes.rent}</p>
            <p>pppm including bills</p>
            </div>
            <div className='bed-bath'>
            <p>{homes.bathroom_count}</p>
            <p>{homes.bedroom_count}</p>
            </div>
        </div>
        <div className='home-furnish-location'>
        <div className='home-furnish'>
            <p>{homes.property_type}</p>
            <p>{homes.furnished}</p>
        </div>
        <p>{homes.address.street}{homes.address.postcode}</p>
        </div>
        <a href='*'>View Home</a>
    </div>
  )
}

export default CityHomesCard