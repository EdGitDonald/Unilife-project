import React, {useContext, useEffect, useState} from 'react'
import './Banner.css'
import axios from 'axios'


function Banner() {
    const [cityInfo, setCityInfo] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        axios.get(`https://unilife-server.herokuapp.com/cities`)
        .then(res => {
            console.log(res.data.response)
            setCityInfo(res?.data?.response) //City infor is stored within this state
    })
        .catch(err => console.log(err))
    },[])

    const BannerStyle = {
        backgroundImage: `url("${cityInfo[index]?.image_url}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "40vh",
        postion: 'relative'
        
    }

  return (
    <div  style={BannerStyle} >
        
        <div className='title-container'>    
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to search accomodation</p>
        </div>

    </div>
  )
}

export default Banner