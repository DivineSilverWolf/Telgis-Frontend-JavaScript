import { React, useState} from 'react'
import './Find.css'
import Vector from "../../images/Vector.png"
import TelgisButton from '../TelgisButton/TelgisButton'

const Find = ({ searchedQuery, setSearchedQuery, visible, setVisible }) => {

  return (
    <div className='find-wrapper'>

      <TelgisButton img={Vector} visible={visible} setVisible={setVisible} />

      {/* <button className="b" onClick={() => setVisible(!visible)}> 
        <img className="img" src={Vector} alt="X" /> 
      </button> */}

      <div className="input-wrapper">
        <input className="input"
          type="text"
          placeholder='Поиск'
          value={searchedQuery}
          onChange={e => setSearchedQuery(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Find
