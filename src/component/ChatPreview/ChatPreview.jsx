import React from 'react'
import "./ChatPreview.css"

const Chat = ({img, chat_name, last_message}) => {
  return (
    <li className='chat-wrapper'>
        <img className="image-wrapper"src={img} alt="chat"/>
        <span className="chat-preview-wrapper">
            <b>{chat_name}</b> <br/>
            {last_message}
        </span>
    </li>
  )
}

export default Chat