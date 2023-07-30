import React, {useEffect, useState} from 'react'
import './HomeDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropertyImages from '../../components/PropertyImages/PropertyImages'
import KeyFeatures from '../../components/KeyFeatures/KeyFeatures'
import { LuBedDouble, LuBath } from "react-icons/lu";
import Modal from 'react-modal'





function HomeDetail() {

const [propertyDetails, setPropertyDetails] = useState(null);

const [isOpen, setIsOpen] =  React.useState(false)

Modal.setAppElement(document.getElementById('root'));



const {propertyId} = useParams()


useEffect(() =>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
    .then(res => {
      console.log("HD info page", res.data)
      // const priceArray = Object.keys(res.data.bedroom_prices)
      // const bedroomObject = res.data.bedroom_prices
      // console.log(priceArray)
      // console.log(bedroomObject)
      // for(let i=0; i < priceArray.length; i++){
      //   console.log(bedroomObject[priceArray[i]])
      // }

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
         <p className='prop-address'>
          {propertyDetails?.address?.street},
          {propertyDetails?.address?.city},
          {propertyDetails?.address?.city},
          {propertyDetails?.address?.postcode}
        </p>
        <div className='property-spec'>
            <div className='heading det-width'>
            <p>Bedrooms</p>
            <p className='det-content'><span className='space'><LuBedDouble /></span>{propertyDetails?.bedroom_count}</p>
            </div>
            <div className='heading det-width'>
            <p>Bathrooms</p>
            <p className='det-content'><span className='space'><LuBath /></span>{propertyDetails?.bathroom_count}</p>
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
        <p onClick = {() => setIsOpen(true)}>Book Viewing</p>

        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        // style={customStyles}
        contentLabel="Contact Us Modal"
      >
      
       <div className='modal-heading'>
        <div className='viewing-container'>
        <h2>Book a Viewing</h2>
        <p> {propertyDetails?.address?.street},
          {propertyDetails?.address?.city},
          {propertyDetails?.address?.city},
          {propertyDetails?.address?.postcode}</p>
        </div>
        <button className="modal-close-btn" onClick={()=>setIsOpen(false)}>close</button>
      </div>
        <form className='form'>
        <div className='form-input'>
         <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="number" />
        </div>
        <div className='form-input'>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="10"></textarea>

          <button  className='modal-btn' type="submit">Submit</button>
        </div>

        </form>
        
        
      </Modal>

        </div>
        </div>

        <div className='description-container width'>
            <h2>Description</h2>
            <p className='des-detail'>{propertyDetails?.property_description}</p>
        
        </div>

        <div className='bedroom-price-container width'>
         
            <h2>Bedroom Prices</h2>
            <div className='bedroom-detail-container'>
            {propertyDetails && Object.keys(propertyDetails?.bedroom_prices).map((objectProperty, index) => 
            <p><span>Bedroom{index+1}</span>  <span>£{propertyDetails?.bedroom_prices[objectProperty]} per week</span></p>
            
              )}
            </div>
        </div>

        <div className='key-feat-container width'>
          <h2>Key Features</h2>
          <div className='key-feat-detail'>
        {
          propertyDetails?.key_features?.map((prop) => { 
            console.log("feat log", propertyDetails?.key_features)
            return <KeyFeatures KeyFeat={prop}/>
          })
         }
        </div>
        </div>

    </div>  
  )
}

export default HomeDetail