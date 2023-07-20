import React, {useEffect, useState} from 'react'
import './HomeDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyImages from '../../components/PropertyImages/PropertyImages'
import BedroomPrice from '../../components/BedroomPrice/BedroomPrice'




function HomeDetail() {

const [propertyDetails, setPropertyDetails] = useState(null);



const {propertyId} = useParams()


useEffect(() =>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
    .then(res => {
      console.log("HD info page", res.data)
      setPropertyDetails(res.data)
      
  })
    .catch(err => console.log(err))
  },[])

  return (
    <div className='home-det-container'>

        <div className='property-img-container width'>
        <img className='property-images-first' src={propertyDetails?.images[0]}/>
        <div className='bottom-row-img'>
         {
          propertyDetails?.images?.map((prop) => { 
            return <PropertyImages propertyImage={prop}/>
          })
         }
        </div>
        </div>

        <div className='property-spec-container width'>
        <div className='property-det-card'>
         <p className='prop-address'>{propertyDetails?.address?.street},{propertyDetails?.address?.city},{propertyDetails?.address?.city},{propertyDetails?.address?.postcode}</p>
        <div className='property-spec'>
            <div className='heading det-width'>
            <p>Bedrooms</p>
            <p className='det-content'>{propertyDetails?.bedroom_count}</p>
            </div>
            <div className='heading det-width'>
            <p>Bathrooms</p>
            <p className='det-content'>{propertyDetails?.bathroom_count}</p>
            </div>
            <div className='heading det-width'>
            <p>Property Type</p>
            <p className='det-content'>{propertyDetails?.property_type}</p>
            </div>
            <div className='heading det-width'>
            <p>Price</p>
            <p className='det-content'>{propertyDetails?.rent}</p>
            </div>
            <div className='heading det-width'>
            <p>Furnished type</p>        
            <p className='det-content'>{propertyDetails?.furnished}</p>
            </div>
            <div className='heading det-width'>
            <p>Available from</p>
            <p className='det-content'>{propertyDetails?.availability}</p>
            </div>
        </div>
        </div>
        <div className='save-view-container'>
        <p>Shortlist</p>
        <p>Book Viewing</p>
        </div>
        </div>

        <div className='description-container width'>
            <h2>Description</h2>
            <p className='des-detail'>{propertyDetails?.property_description}</p>
        
        </div>

        <div className='bedroom-price-container width'>
            <p>Bedroom Prices</p>
            <p>{propertyDetails?.bedroom_prices?.bedroom_one}</p>
        </div>

        <div className='key-feat-container width'>
           
        </div>

    </div>
  )
}

export default HomeDetail