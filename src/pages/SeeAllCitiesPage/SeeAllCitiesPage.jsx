import React, {useEffect, useContext} from 'react'
import './SeeAllCitiesPage.css'
import Banner from '../../components/Banner/Banner'
import axios from 'axios'
import SingleCityCard from '../../components/SingleCityCard/SingleCityCard'

function SeeAllCitiesPage() {
    const [seeAllCities, setSeeAllCities] = React.useState([])

    useEffect(() => {
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
        .then(res => {
          console.log(res.data.response)
          setSeeAllCities(res.data.response)
        })
        .catch(err => console.log(err))
      },[])



  return (
    <div>
        <Banner />
        <div className='searchCity-container'>
            <h3>Search By City</h3>

        <div className='searchCityCard-container'>
            {
                seeAllCities.map(prop => {
                    return <SingleCityCard city={prop} />
                })
            }

        </div>

        </div>
    </div>
  )
}

export default SeeAllCitiesPage