import React, {useEffect, useState} from 'react'
import './HomeDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyDetails from '../../components/PropertyDetails/PropertyDetails'


function HomeDetail() {

const {propertyId} = useParams()

const [propertyDetails, setPropertyDetails] = useState();

useEffect(() =>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
    .then(res => {
      console.log(res.data)
      setPropertyDetails(res.data)
      
  })
    .catch(err => console.log(err))
  },[])

  return (
    <div className='home-det-container'>
        
    <PropertyDetails property={propertyDetails}/>

    
    </div>
  )
}

export default HomeDetail