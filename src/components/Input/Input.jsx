import React, {useState} from 'react'
import './Input.css'
import { useNavigate } from 'react-router-dom'



function Input({cityList}) {

    const [cityId, setCityId] = useState('')
    const [disabled, setDisabled] =useState(true)

    const getDropDown = (e) => {
        console.log(e.target.value)
        setCityId(e.target.value)
        if(e.target.value !== "default"){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
        //disabling and re-enabling button after making a selection from 
        //dropdown in order to prevent navigation to citydetails page without any city info
        //refer to lines 34-44 to see implementation
    }

    const navigate = useNavigate()


  return (
    <div className='extior'>
        <div className='input-container'>
        {/* <input type="text" placeholder='Search By City'/> */}
        <select  onChange={getDropDown}>
            <option value="default">Select By City</option>
            {
                cityList.map((item) => 
                <option value={item._id}>{item.name}</option>
                )
            }
            
        </select>
        <button disabled={disabled} onClick={() =>{navigate(`/CityDetails/${cityId}/test`)}}>Find Homes</button>
        </div>
     </div>
  )
}

export default Input