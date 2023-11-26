import { React, useState, useMemo} from 'react'
import Emma from '../../images/Emma.jpg'
import './ChatCreator.css'
import FindFriend from '../FindFriend/FindFriend'

const ChatCreator = () => {
  const [chatName, setChatName] = useState('')
  const [friendName, setFriendName] = useState('')
  const [selectedFriends, setSelectedFriends] = useState([])

  const friends = [
    {
      id : 1,
      avatar : Emma,
      userName : "emma1",
    },
    {
      id : 2,
      avatar : Emma,
      userName : "emma2",
    },
    {
      id : 3,
      avatar : Emma,
      userName : "emma2",
    },

    {
      id : 4,
      avatar : Emma,
      userName : "effffffffffffffffffmma2",
    },
    {
      id : 5,
      avatar : Emma,
      userName : "emma2",
    }
  ]



  const handleClick = (e) => {
    setFriendName(e.target.value)
  }

  const createChat = (e) => {
    // console.log(selectedFriends)
  }

  const handleClickToUser = (setIsSelected, isSelected, user) => {
    if (!isSelected) {
      setSelectedFriends(prev => [...prev, user]);
      console.log("hello")
    }
    else {
      setSelectedFriends(prev => prev.filter(friend => friend.id !== user.id))
    }
    setIsSelected(prev => !prev)
  }

  return (
    <div className="t">
      <form className='chat-creator-container'>
        <input  className="chat-name-input" 
          type="text"
          value={chatName}
          placeholder='Название чата'
          onChange={e => setChatName(e.target.value)}
        />

        <FindFriend/>

        <button className="create-chat" onClick={createChat}>
          Создать чат
        </button>
      </form>
    </div>
  )
}

export default ChatCreator
