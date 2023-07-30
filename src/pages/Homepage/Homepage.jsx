import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import axios from 'axios'
import CityCard from '../../components/CityCard/CityCard'
import CompareInsert from '../../components/CompareInsert/CompareInsert'
import Infobox from '../../components/Infobox/Infobox'
import Input from '../../components/Input/Input'
import ContactUs from '../../components/ContactUs/ContactUs'



function Homepage() {
  const [citiesData, setCitiesData] = React.useState([]);
  const [completeCities, SetCompleteCities] = React.useState([]);
  

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
    .then(res => {
      console.log(res.data.response)
      setCitiesData(res.data.response.slice(0,9))
      SetCompleteCities(res.data.response)
    })
    .catch(err => console.log(err))
  },[])
 
 const navigate = useNavigate()
 
  return (
    <div className='homepage-container'>
        <Banner />
        <Input cityList={completeCities}/>
    
    <div className='city-container'>
        <h2>Student accomodations in our top cities</h2>

        <div className='city-card-container'>
          { 
            citiesData.map(item => {
            return <CityCard cityList={completeCities} city={item}/> 
            //prop needs to be called inside return otherwise 
            //CityCard cannot access api data
            })
           }
            <button className='city-button' onClick={() =>{navigate('/SeeAllCities')}}>See All Cities</button> 
           
        </div>

        <CompareInsert />
        <Infobox />
        
    </div>
    </div>
  )
}

export default Homepage