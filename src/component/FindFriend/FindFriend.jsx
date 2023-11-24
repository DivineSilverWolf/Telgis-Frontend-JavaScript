import { React, useState, useEffect } from 'react'
import UserService from '../../api/UserService'
import Emma from '../../images/Emma.jpg'
import User from '../User/User'
import './FindFriend.css'
import UserActionsBar from '../UserActionsBar/UserActionsBar'
import useMousePosition from '../../hooks/useMousePosition'

const FindFriend = () => {
  const [friendName, setFriendName] = useState('')
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [friends, setFriends] = useState([
      {
        id : 1,
        img : Emma,
        name : "hello",
      },

      {
        id : 2,
        img : Emma,
        name : "helsing",
      },

      {
        id : 3,
        img : Emma,
        name : "gotcha",
      },

      {
        id : 4,
        img : Emma,
        name : "emma mayers",
      }
    ]
  )

  // const {x, y} = useMousePosition();

  const handleClickToUser = (setSelectedFriend, selectedFriend, setIsSelected, isSelected, user) => {
    setIsSelected(prev => !prev)

    if (!isSelected) {
      setSelectedFriend(user)
    }
    else {
      setSelectedFriend(null)
    }
  }

  return (
   <div className="t">
      <div className="find-users-container">
          <input className="friend-name-input" 
            type="text"
            value={friendName}
            placeholder='Поиск друга'
            onChange={e => setFriendName(e.target.value)}
          />

          <ul className="users-container">
          {
            friends.map(user => 
              <User 
                key={user.id} 
                user={user}
                handleClickToUser={(setIsSelected, isSelected) => handleClickToUser(setSelectedFriend, selectedFriend, setIsSelected, isSelected, user)}
              />
            )
          }
          </ul>
          {
            selectedFriend && <UserActionsBar/>
          }
      </div>
    </div>
  )
}

export default FindFriend

