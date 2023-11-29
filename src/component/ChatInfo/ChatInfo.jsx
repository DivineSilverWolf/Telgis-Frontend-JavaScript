import React from 'react'
import './ChatInfo.css'
import coordsImg from '../../images/show-coords.png'

const ChatInfo = ({name}) => {
  
  return (
    <div className='chat-info-container'>
      <span> {name} </span>
      <img src={coordsImg} alt="show-friends" />
    </div>
  )
}

export default ChatInfo
