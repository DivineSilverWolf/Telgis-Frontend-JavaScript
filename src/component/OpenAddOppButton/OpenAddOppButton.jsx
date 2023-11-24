import React from 'react'
import showChatListButton from '../../images/showChatsButton.svg'
import './OpenAddOppButton.css'

const CreateChatButton = ({isAvalible, setIsAvalible}) => {

  const handleClick = () => {
    setIsAvalible(!isAvalible)
  }

  return (
    <div className="create-chat-button">
      <img src={showChatListButton} alt="no chats" onClick={handleClick}/>
    </div>
    )
}

export default CreateChatButton