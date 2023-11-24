import React from 'react'
import Chat from '../Chat/Chat'
import ChatToMapToogle from '../ChatToMapToogle/ChatToMapToogle'


const ChatBar = () => {
  return (
    <div className='chat-bar-container'>

      <header className='header'>
        <MyButton />
        <OpenAddOppButton />
      </header>

      <ChatToMapToogle />

      <Chat />

    </div>
  )
}

export default ChatBar
