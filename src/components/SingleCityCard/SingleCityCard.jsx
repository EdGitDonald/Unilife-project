import React from 'react'
import './SingleCityCard.css'

function SingleCityCard({city}) {
  return (
    <div className='allCity-container'>
        <p>{city.name}</p>
    </div>
  )
}

export default SingleCityCard