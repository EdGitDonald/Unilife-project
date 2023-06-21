import React, {useEffect, useContext} from 'react'
import './CityCard.css'
import axios from 'axios'

function CityCard({city}) {
  
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
    
    <div style={imageStyle} className='city-text-container'>
            <p>{city.name}</p>
            <p className='small-text'>{city.property_count} properties</p>    
    </div>
    
  )
}

export default CityCard