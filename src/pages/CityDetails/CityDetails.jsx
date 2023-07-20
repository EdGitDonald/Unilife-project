import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CityHomesCard from '../../components/CityHomesCard/CityHomesCard'
import Banner from '../../components/Banner/Banner'
import StudentInsert from '../../components/StudentInsert/StudentInsert'
import FilterPropInput from '../../components/FilterPropInput/FilterPropInput'



function CityDetails() {

  const {cityId, testParam} = useParams()
  // console.log(cityId, testParam)
  const [cityHomes, setCityHomes] = useState([])
 

  useEffect(() =>{
  axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
  .then(res => {
    console.log("This one", res.data.response)
    const filterProperties = res.data.response.filter((property) => {console.log(property); return property.key_features.length !== 0})
    //^ feature for filtering out bad data from the array, using .filter, filterProperties replaces "res.data.response" 
    // in setCityHomes to implement this.
    setCityHomes(filterProperties)
    // below state for calling additional property detail for each card for home detail page
})
  .catch(err => console.log(err))
},[])

  return (
<div className='citydetails-container'>
    <Banner />
    <FilterPropInput id = {cityId} setProperties ={setCityHomes} />
    
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