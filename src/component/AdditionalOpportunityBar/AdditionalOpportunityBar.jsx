import { React, useState, useContext } from 'react'
import AdditionalOpporunityContext from '../../context/AdditionalOpportunityContext.js'
import {AdditionalOpportunityItems} from '../../utils/AdditionalOpportunityItems.js'

import "./AdditionalOpportunityBar.css"
import { AuthContext } from '../../context/AuthContext.js'
import TelgisButton from '../TelgisButton/TelgisButton.jsx'
import showAddOppBar from '../../images/showAddOppBar.svg'

const AdditionalOpportunityBar = () => {
  const [isAvalible, setIsAvalible] = useState(false);

  const [id, setId] = useContext(AdditionalOpporunityContext)
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const handleClick = (itemId) => {
    if (itemId === 4) {
      setIsAuth(!isAuth) // this is exit button
      return
    }

    else if (id === itemId) {
      setId(-1) // just close this item
      return
    }

    setId(itemId); // focus item 
  }

  return (
    <div className='app-opp-container'>
      {/* <OpenAddOppButton isAvalible={isAvalible} setIsAvalible={setIsAvalible} /> */}
      <TelgisButton img={showAddOppBar} visible={isAvalible} setVisible={setIsAvalible} />

      {
      isAvalible &&
        <nav className="nav-options-container">
          {
            AdditionalOpportunityItems.map(option => {
              return (
                <div className="option-container" key={option.id} 
                  onClick={() => handleClick(option.id)}>
                  <img src={option.img} alt="opt"/>
                  <span className='option'>{option.name}</span>
                </div>
              )
            })
          }
        </nav>
      }
    </div>
  )
}

export default AdditionalOpportunityBar
