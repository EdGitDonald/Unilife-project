import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CityHomesCard from '../../components/CityHomesCard/CityHomesCard'
import Banner from '../../components/Banner/Banner'
import StudentInsert from '../../components/StudentInsert/StudentInsert'



function CityDetails() {

  const {cityId, testParam} = useParams()
  // console.log(cityId, testParam)
  const [cityHomes, setCityHomes] = useState([])

  useEffect(() =>{
  axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
  .then(res => {
    console.log(res.data.response)
    setCityHomes(res.data.response)
})
  .catch(err => console.log(err))
},[])

  return (
<div className='citydetails-container'>
    <Banner />
    
    <div className='homes-container'>
        {
            cityHomes.map(item => {
                return <CityHomesCard homes={item}/>
                //insert component for city homes map
            })
        }
    </div>

    <StudentInsert />
</div>
  )
}

export default CityDetails