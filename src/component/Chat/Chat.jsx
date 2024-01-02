import { React, useContext, useState, useEffect } from 'react'
import './Chat.css'
import sendImg from '../../images/sendMessage.svg'
import ChatService from '../../api/ChatService'
import { ChatContext } from '../../context/ChatContext'

const Chat = ({chatId, setChatId, isChatVisible, setIsChatVisible, chatName, setChatName}) => {
  const myId = 'jenya'

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    // {
    //   id : 1,
    //   text: "Привет!",
    //   userId: "jenya" 
    // },
    // {
    //   id : 2,
    //   text: "Привет, это кто?",
    //   userId: "masha" 
    // },
    // {
    //   id : 3,
    //   text: "Это Пригожин Женя",
    //   userId: "jenya" 
    // },
    // {
    //   id : 4,
    //   text: "А, здорова! А я Кирилл Буданов",
    //   userId: "emma" 
    // },
    // {
    //   id : 5,
    //   text: "Че, как у тебя дела?",
    //   userId: "jenya" 
    // },
    // {
    //   id : 10,
    //   text: "Нормально! ",
    //   userId: "emma" 
    // }
  ])

  useEffect( () => {
    if (chatId && chatId >= 0) {
      // setMessages(ChatService.getChatByChatId(myId, chatId))
    }
  }, [])

  return (
    <div className='chat-container'>
      <div className='scroll-container'>
        <div className="messages-container">
        {
          messages.map(message => {
            return (
              <div className={`message-container ${message.userId === myId ? ' right' : '' }`} >
                {/* <div className="avatar-container">
                  {message.avatar}
                </div> */}
                <p className='text-container'>
                  {message.text}
                </p>
              </div>
            )
          })
        }
        </div>
      </div>

      <form className='input-text-container'
          onSubmit={(e) => {
            e.preventDefault(); 
            if (message === '') return
            // if (message.match(/' '*/gi) === null) return

            setMessages([...messages, {id: 12, text : message, userId: myId}])
            setMessage('')
          }}>

        <input 
          className="input-text"
          type="text" 
          value={message}

          onChange={e => setMessage(e.target.value)}
          />

          <button className="img-container">
            <img src={sendImg} alt="send" />
          </button>

      </form>
    </div>
  )
}

export default Chat
