import React from 'react'
import './TelgisButton.css'

const TelgisButton = ({img, visible, setVisible}) => {

  return (
    <div className='telgis-button-container'>
      <button className='telgis-button' onClick={() => setVisible(!visible)}>
          <img src={img} alt="button" />
      </button> 
    </div>
  )
}

export default TelgisButton
