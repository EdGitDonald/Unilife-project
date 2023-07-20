import React from 'react'
import './SingleCityCard.css'
import { useNavigate } from 'react-router-dom'

function SingleCityCard({city}) {

  const navigate = useNavigate()
  return (
    <div className='allCity-container' onClick={() =>{navigate(`/CityDetails/${city._id}/test`)}}>
        <p>{city.name}</p>
    </div>
  )
}

export default SingleCityCard