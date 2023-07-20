import React, { useEffect, useState } from 'react'
import'./FilterPropInput.css'
import axios from 'axios'

function FilterPropInput({id, setProperties}) {

  const [query, setQuery] = useState({city_id: id, bedroom_count:0 , bathroom_count:0 , rent:50000, });

  const handleBedroomChange = (e) => {
    const queryObject = {...query,bedroom_count: Number(e.target.value)};
    setQuery(queryObject); 
    // handlechange function to store result/number/option chosen from select menu and stored
    // with value e, Number(e.target.value) <- forces result to be given as a number and not string literal
    // each select is set too setQuery from the state above, 
  }

  const handleBathroomChange = (e) => {
    const queryObject = {...query,bathroom_count: Number(e.target.value)};
    setQuery(queryObject); 
  }

  const handleRentChange = (e) => {
    const queryObject = {...query,rent: Number(e.target.value)};
    setQuery(queryObject); 
  }

  const handleTypeChange = (e) => {
    const queryObject = {...query,property_type: e.target.value};
    setQuery(queryObject); 
  }

  useEffect(() => {
    console.log("inside use effect")
    console.log(query)
    axios.post(`https://unilife-server.herokuapp.com/properties/filter`,
    {query:query})
      .then(res => {
         setProperties(res.data.response)
         // ^ setProperties is equal to setCityHomes which will set the value for cityHomes. 
         // cityHomes is a state varible; When a state varible changes the component renders
     })
       .catch(err => console.log(err))

  },[query])
  // ^ query is set inside so when a change is made to the state the page refreshes/mounts the page 
  // with the alerted data e.g. when a select option is changed

  const optionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const optionPrice = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000];

  const optionType = ["Detached", "Semi-Detached", "Apartment"];

  return (
   <div className='filter-input'>
    <div className='filter-container'>
        <div>
            <p>Min Bedroom</p>
        <select onChange={handleBedroomChange}>
            <option value="default">Any Bedroom</option>
         {
            optionNumbers.map((number)=> <option key={number} value={number}>{number}</option>)
         }
        </select>
        </div>
        <div>
            <p>Min Bathroom</p>
        <select onChange={handleBathroomChange}>
            <option value="default">Any Bathroom</option>
            {
            optionNumbers.map((number)=> <option key={number} value={number}>{number}</option>)
            }
        </select>
        </div>
        <div>
           <p>Max Price</p>
        <select onChange={handleRentChange}>
            <option value="default">Any Price</option>
            {
            optionPrice.map((number)=> <option key={number} value={number}>£{number}</option>)
            }
           
        </select>
        </div>
        <div>
           <p>Home Type</p>
        <select onChange={handleTypeChange}>
            <option value="default">Any Type</option>
            {
            optionType.map((type)=> <option key={type} value={type}>{type}</option>)
            }
        </select>
        </div>
    </div>
    </div>
   
  )
}

export default FilterPropInput