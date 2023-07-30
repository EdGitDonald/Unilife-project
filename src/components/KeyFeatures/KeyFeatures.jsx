import React from 'react'
import './KeyFeatures.css'
import { FiCheck } from "react-icons/fi";



function KeyFeatures({KeyFeat}) {
  return (
    <div className='features'>
        <FiCheck />
        <p>{KeyFeat}</p>
    </div>
  )
}

export default KeyFeatures