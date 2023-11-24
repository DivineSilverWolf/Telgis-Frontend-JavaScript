import { React, useContext } from 'react'

import AdditionalOpporunityContext from '../../context/AdditionalOpportunityContext.js'

import './AdditionalOpportunityItem.css'
import {AdditionalOpportunityItems} from '../../utils/AdditionalOpportunityItems.js'

const AdditionalOpportunityItem = () => {
  const [id, setId] = useContext(AdditionalOpporunityContext)

  return (
    <div className='item-container'>
      {
        (id >= 1 && id <= AdditionalOpportunityItems.length ) && 
          AdditionalOpportunityItems
          .filter(item => item.id === id)
          .shift()
          .component
      }
    </div>
  )
}

export default AdditionalOpportunityItem
