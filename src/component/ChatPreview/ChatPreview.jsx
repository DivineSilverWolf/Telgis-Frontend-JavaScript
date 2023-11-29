import {React, useContext} from 'react'
import "./ChatPreview.css"
import { ChatContext } from '../../context/ChatContext'

const ChatPreview = ({id, img, chat_name, last_message}) => {
  const [{chatId, setChatId}, {chatBarVisible, setChatBarVisible}, {chatName, setChatName}] = useContext(ChatContext)

  const handleClick = () => {
    setChatId(id)
    setChatBarVisible(true)
    setChatName(chat_name)
  }

  return (
    <li className='chat-wrapper' onClick={handleClick}>
        <img className="image-wrapper"src={img} alt="chat"/>
        <span className="chat-preview-wrapper">
            <b>{chat_name}</b> <br/>
            {last_message}
        </span>
    </li>
  )
}

export default ChatPreview