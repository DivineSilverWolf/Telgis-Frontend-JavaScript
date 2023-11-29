import {React, useState, useContext} from 'react'
import Chat from '../Chat/Chat'
import ChatInfo from '../ChatInfo/ChatInfo.jsx'
import './ChatBar.css'
import TelgisButton from '../TelgisButton/TelgisButton.jsx'
import backToMap from '../../images/back.svg'
import { ChatContext } from '../../context/ChatContext.js'

const ChatBar = () => {
  const [{chatId, setChatId}, {chatBarVisible, setChatBarVisible}, {chatName, setChatName}] = useContext(ChatContext)

  return (
    <div className='chat-bar-container'>
      <header className='header'>
        <TelgisButton img={backToMap} visible={chatBarVisible} setVisible={setChatBarVisible}/>
      </header>

      <ChatInfo name={chatName}/>
      <Chat 
        chatId={chatId} 
        setChatId={setChatId}
        chatBarVisible={chatBarVisible} 
        setChatBarVisible={setChatBarVisible}
        chatName={chatName} 
        setChatName={setChatName}
      />
    </div>
  )
}

export default ChatBar
