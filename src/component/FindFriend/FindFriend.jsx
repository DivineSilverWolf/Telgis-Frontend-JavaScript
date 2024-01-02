import { React, useState, useMemo } from 'react'
import UserService from '../../api/UserService'
import Emma from '../../images/Emma.jpg'
import User from '../User/User'
import './FindFriend.css'
import UserActionsBar from '../UserActionsBar/UserActionsBar'

const FindFriend = () => {
  const [friendName, setFriendName] = useState('')
  const [selectedFriend, setSelectedFriend] = useState(null)

  const [friends, setFriends] = useState(
  // [
  //     {
  //       id : 1,
  //       avatar : Emma,
  //       userName : "hello",
  //     },

  //     {
  //       id : 2,
  //       avatar : Emma,
  //       userName : "helsing",
  //     },

  //     {
  //       id : 3,
  //       avatar : Emma,
  //       userName : "gotcha",
  //     },

  //     {
  //       id : 4,
  //       avatar : Emma,
  //       userName : "emma mayers",
  //     },

  //     {
  //       id : 5,
  //       avatar : Emma,
  //       userName : "emma mayers",
  //     }
  //   ]
  )

  // const filterdFriends = useMemo(() => {
  //     return friends.filter(friend => friend.userName.toLowerCase().includes(friendName.toLowerCase()))
  //   }, [friends, friendName]
  // )

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
      <div className="find-users-container">
          <input className="friend-name-input" 
            type="text"
            value={friendName}
            placeholder='Поиск друга'
            onChange={e => setFriendName(e.target.value)}
          />

          <div className="all-users">
            <div className="users-container">
            {
              users.map(user => 
                <User 
                  key={user.id} 
                  user={user}
                  handleClickToUser={(setIsSelected, isSelected) => handleClickToUser(setSelectedFriend, selectedFriend, setIsSelected, isSelected, user)}
                />
              )
            }
            </div>
          </div>
          {
            selectedFriend && <UserActionsBar/>
          }
      </div>
  )
}

export default FindFriend

