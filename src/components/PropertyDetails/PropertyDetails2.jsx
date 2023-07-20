import React, { useState } from 'react'
import './PropertyDetails.css'

function PropertyDetails({property}) {

  return (
    
    <div className='home-det-container'>
        <div className='property-img-container width'>
        <img className='property-images-first' src={property?.images[0]}/>
        <div className='bottom-row-img'>
        <img className='property-images' src={property?.images[1]}/>
        <img className='property-images' src={property?.images[2]}/>
        <img className='property-images' src={property?.images[3]}/>
        </div>

       
        </div>
        
        <div className='property-spec-container width'>
        <div className='property-det-card'>
         <p className='prop-address'>{property?.address?.street},{property?.address?.city},{property?.address?.city},{property?.address?.postcode}</p>
        <div className='property-spec'>
            <p className='det-width'>{property?.bedroom_count}</p>
            <p className='det-width'>{property?.bathroom_count}</p>
            <p className='det-width'>{property?.property_type}</p>
            <p className='det-width'>{property?.rent}</p>
            <p className='det-width'>{property?.furnished}</p>
            <p className='det-width'>{property?.availability}</p>
        </div>
        </div>
        </div>

        <div className='description-container width'>
            <p>Description</p>
            <p>{property?.property_description}</p>
        </div>

        <div className='bedroom-price-container width'>
            <p>Bedroom Prices</p>
            <div>

                {/* {
                    property.map(() => {
                        return


                    })
                } */}





                {/* {
                seeAllCities.map(prop => {
                    return <SingleCityCard city={prop} />
                })
            } */}

                {/* <div className='bed-prices'>
                    <p>Bedroom 1</p>
                    <p>{property?.bedroom_prices?.bedroom_one} per week</p>
                </div> 
                //Loop through bedroom prices and paste into a template*/}

                {/* <p>£{property?.bedroom_prices?.bedroom_one} per week</p>
                <p>£{property?.bedroom_prices?.bedroom_two} per week</p>
                <p>£{property?.bedroom_prices?.bedroom_three} per week</p>
                <p>£{property?.bedroom_prices?.bedroom_four} per week</p> */}

            </div>
        </div>

        <div className='key-feat-container width'>
            {/* <p>{property?.key_features[0]}</p>
            <p>{property?.key_features[1]}</p>
            <p>{property?.key_features[2]}</p>
            <p>{property?.key_features[3]}</p>
            <p>{property?.key_features[4]}</p> */}

            {/* <p>{property?.key_features[0]}</p>
            //Loop through key_features */}
        </div>

    </div>
  )
}

export default PropertyDetails