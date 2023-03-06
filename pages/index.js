import React from 'react'
import Meta from '../components/Meta'


/** Render the home page */
const index = () => {
  return (
    <div className='home container'>
      <Meta />
      <div className='nameContainer'>
        <h1>Charles Cantin</h1>
        <span id='line'></span>
        <p id='titleP'>Photographe</p>

      </div>
      
      
    </div>
  )
}

export default index