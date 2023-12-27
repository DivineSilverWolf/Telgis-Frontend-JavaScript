import { React, useState, useMemo, useContext } from 'react'
import Chat  from '../ChatPreview/ChatPreview'
import Emma from '../../images/Emma.jpg'
import './ChatList.css'
import { ChatContext } from '../../context/ChatContext.js'
import ChatPreview from '../ChatPreview/ChatPreview'

const ChatList = ({ searchedQuery }) => {

  const [chats, setChats] = useState([
      // {
      //   id : 1,
      //   img : Emma,
      //   chat_name : "hello",
      //   last_message : "hello1"
      // },

      // {
      //   id : 2,
      //   img : Emma,
      //   chat_name : "helsing",
      //   last_message : "hello2"
      // },

      // {
      //   id : 3,
      //   img : Emma,
      //   chat_name : "gotcha",
      //   last_message : "hello2"
      // },

      // {
      //   id : 4,
      //   img : Emma,
      //   chat_name : "emma mayers",
      //   last_message : "hello2"
      // },

      // {
      //   id : 5,
      //   img : Emma,
      //   chat_name : "chat",
      //   last_message : "hello2"
      // }
    ]
  )

  const searchedChats = useMemo ( 
    () => {
      console.log(searchedQuery)
      if (searchedQuery == '') return chats
      return [...chats].filter(chat => chat.chat_name.toLowerCase().includes(searchedQuery))
    },
    [chats, searchedQuery]
  ) 

  const addChat = (chat) => {
    setChats(curChats => [...curChats, chat])
  }

  const deleteChat = (id) => {
    setChats(chats.map(chat => chat.id === id))
  }

  return  (
    <ul className="chat-list-wrapper">
      { searchedChats.map((chat) => {
        return <ChatPreview 
          key={chat.id}
          id={chat.id}
          img={chat.img}
          chat_name={chat.chat_name} 
          last_message={chat.last_message}/>
      })}
    </ul>
  )
}

export default ChatList
