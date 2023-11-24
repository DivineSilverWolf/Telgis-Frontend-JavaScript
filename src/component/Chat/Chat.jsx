import { React, useState } from 'react'

const Chat = () => {
  const [messages, setMessages] = useState([])

  useEffect( () => {
    // get messages
  }, [])


  return (
    <div className='chat-container'>
      {
        messages.map(message => {
          return (
            <div className="message-container">
              <div className="avatar-container">
                {message.avatar}
              </div>
              <p className='text-container'>
                {message.text}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Chat
