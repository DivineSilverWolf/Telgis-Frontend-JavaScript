import { React, useEffect, useState, useContext, useMemo } from 'react'
import User from '../User/User'
import UserActionsBar from '../UserActionsBar/UserActionsBar'
import UserService from '../../api/UserService'
import { UserInfoContext } from '../../context/UserInfoContext'
import { NotificationContext } from '../../context/NotificationContext'
import AdditionalOpportunityContext from '../../context/AdditionalOpportunityContext'
import avatar from '../../images/avatar.png'

import './AddFriend.css'
import { filter } from '@syncfusion/ej2-react-maps'

const AddFriend = () => {
  const [friendName, setFriendName] = useState('')
  const [selectedFriend, setSelectedFriend] = useState(null)

	const {userInfo, setUserInfo} = useContext(UserInfoContext)
	const {notification, setNotification} = useContext(NotificationContext)
  const [id, setId] = useContext(AdditionalOpportunityContext);

  const [users, setUsers] = useState([{
        id : 1,
        avatar : avatar,
        login : "User1",
      },

      {
        id : 2,
        avatar : avatar,
        login : "User2",
      },

      {
        id : 3,
        avatar : avatar,
        login : "User3",
      },

      {
        id : 4,
        avatar : avatar,
        login : "User4",
      },

      {
        id : 5,
        avatar : avatar,
        login : "User5",
      }
    ])

    // const newUsers = UserService.getUsers(userInfo.login)

    // newUsers.then(
    //   newUsers => {
    //     if (!newUsers) {
    //       setNotification('Ошибка при получении списка пользователей')
    //     }
    //     else {
    //       setNotification('Успешно получили список пользователей')
    //       setUsers(newUsers)
    //     }
    //   }
    // )

    // return setUsers([])

  const filtered = useMemo(
    () => {
      if (friendName == '') return users
      return [...users].filter(user => user?.login.includes(friendName))
    },
    [users, friendName]
    )

  const handleClickToUser = (user) => {
    setSelectedFriend(user)
  }

  return (
    <div className="add-frined-container" onClick={() => setId(-1)}>
      <div className="add-friend" onClick={e => e.stopPropagation()}>
        <input className="friend-name-input"
          type="text"
          value={friendName}
          placeholder='Поиск друга'
          onChange={e => setFriendName(e.target.value)}
        />

        <div className="all-users">
          <div className="users-container">
            {
              filtered.map(user =>
                <User
                  key={user.login}
                  user={user}
                  handleClickToUser={handleClickToUser}
                />
              )
            }
          </div>
        </div>

        <UserActionsBar />
      </div>
    </div>
  )
}

export default AddFriend
