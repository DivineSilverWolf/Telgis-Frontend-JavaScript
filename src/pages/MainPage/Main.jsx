import React, { useState } from 'react'
import LeftBar from '../../component/Leftbar/LeftBar'
import MyMap from '../../component/MyMap/MyMap'
import AdditionalOpportunityBar from '../../component/AdditionalOpportunityBar/AdditionalOpportunityBar'
import AdditionalOpportunityContext from '../../context/AdditionalOpportunityContext'
import AdditionalOpportunityItem from '../../component/AdditionalOpportunityItem/AdditionalOpportunityItem'

import './Main.css'
import ChatBar from '../../component/ChatBar/ChatBar'
import { ChatContext } from '../../context/ChatContext'
import UserService from '../../api/UserService'

const Main = () => {
  const [additionalOpportunityId, setAdditionalOpprtunityId] = useState(-1)

  const [chatBarVisible, setChatBarVisible] = useState(false)
  const [chatId, setChatId] = useState(-1)
  const [chatName, setChatName] = useState('')


  return (
    <div className='main-page-container'>

      <ChatContext.Provider value={[
        {chatId, setChatId},
        {chatBarVisible, setChatBarVisible},
        {chatName, setChatName}]}> 

        <MyMap />
        <LeftBar />
        { chatBarVisible && <ChatBar/> }
      </ChatContext.Provider>


      <AdditionalOpportunityContext.Provider value={[additionalOpportunityId, setAdditionalOpprtunityId]}>
        <AdditionalOpportunityItem/>
        <AdditionalOpportunityBar/>
      </AdditionalOpportunityContext.Provider>
    </div>
  )
}

export default Main
