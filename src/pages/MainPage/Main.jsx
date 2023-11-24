import React, { useState } from 'react'
import LeftBar from '../../component/Leftbar/LeftBar'
import MyMap from '../../component/MyMap/MyMap'
import AdditionalOpportunityBar from '../../component/AdditionalOpportunityBar/AdditionalOpportunityBar'
import AdditionalOpportunityContext from '../../context/AdditionalOpportunityContext'
import AdditionalOpportunityItem from '../../component/AdditionalOpportunityItem/AdditionalOpportunityItem'

import './Main.css'

const Main = () => {
  const [additionalOpportunityId, setAdditionalOpprtunityId] = useState(-1)

  return (
    <div className='main-page-container'>
      {/* <MyMap /> */}
      <LeftBar />

      <AdditionalOpportunityContext.Provider value={[additionalOpportunityId, setAdditionalOpprtunityId]}>
        <AdditionalOpportunityItem/>
        <AdditionalOpportunityBar/>
      </AdditionalOpportunityContext.Provider>
    </div>
  )
}

export default Main
