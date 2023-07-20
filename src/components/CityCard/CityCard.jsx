import React, {useState} from 'react'
import './CityCard.css'
import { useNavigate } from 'react-router-dom'

function CityCard({city}) {

  const navigate = useNavigate()

    const imageStyle={
        backgroundImage: `url(${city.image_url})`,
        width: '30%',
        height: '300px',
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        borderRadius: '16px',
      }

    return (
    
    <div style={imageStyle} className='city-text-container'  onClick={() =>{navigate(`/CityDetails/${city._id}/test`)}}>
            <p>{city.name}</p>
            <p className='small-text'>{city.property_count} properties</p>    
    </div>
    
  )
}

export default CityCard