import React from 'react'
import './PropertyImages.css'

function PropertyImages({propertyImage}) {
  return (
        <img className='property-images' src={propertyImage} />
   
  )
}

export default PropertyImages