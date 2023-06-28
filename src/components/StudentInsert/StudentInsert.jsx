import React from 'react'
import './StudentInsert.css'
import recetangle11 from '../../assets/Rectangle-11.png'

function StudentInsert() {
  return (
    <div className='student-insert-container'>
        <div className='student-text'>
        <h4>Being a student in Leeds</h4>
        <p>Leeds is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. Leeds is the perfect mix of city and town life and has something to offer to anyone who calls it home.</p>
        <p>Leeds is home to three universities, the University of Leeds, Leeds Trinity University and Leeds Beckett University</p>
        </div>
        <img src={recetangle11} alt="img"/>

        
    </div>
  )
}

export default StudentInsert