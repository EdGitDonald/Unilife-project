import React, { useState , useEffect} from 'react'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import axios from 'axios'
import CityCard from '../../components/CityCard/CityCard'


function Homepage() {
  const [citiesData, setCitiesData] = React.useState([]);

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities`)
    .then(res => {
      console.log(res.data.response)
      setCitiesData(res.data.response.slice(0,9))
    })
    .catch(err => console.log(err))
  },[])
 




  return (
    <div className='homepage-container'>
        <Banner />
    
    <div className='city-container'>
        <h2>Student accomodations in our top cities</h2>

        <div className='city-card-container'>
         
          { 
            citiesData.map(item => {
            return <CityCard city={item}/> 
            //prop needs to be called inside return otherwise 
            //CityCard cannot access api data
            })
           }
          
            


        </div>
    </div>
    </div>
  )
}

export default Homepage