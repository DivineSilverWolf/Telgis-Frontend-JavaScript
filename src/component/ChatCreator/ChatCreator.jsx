import { React, useState, useMemo} from 'react'
import Emma from '../../images/Emma.jpg'
import User from '../User/User'
import './ChatCreator.css'

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

  let filterdFriends = useMemo(() => {
    return friends.filter(friend => friend.userName.toLowerCase().includes(friendName.toLowerCase()))
  }, [friends, friendName]
  )


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
        <div className="find-users-container">
            <input className="friend-name-input" 
              type="text"
              value={friendName}
              placeholder='Поиск друга'
              onChange={e => handleClick(e)}
            />

          <ul className="users-container">
          {
            filterdFriends.map(user => 
              <User 
                key={user.id} 
                user={user}
                handleClickToUser={(setIsSelected, isSelected, user) => handleClickToUser(setIsSelected, isSelected, user)}
              />
            )
          }

          </ul>
        </div>
        <button className="create-chat" onClick={createChat}>
          Создать чат
        </button>
      </form>
    </div>
  )
}

export default ChatCreator
