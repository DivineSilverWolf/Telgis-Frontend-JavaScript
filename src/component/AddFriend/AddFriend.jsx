import { React, useEffect, useState, useContext } from 'react'
import User from '../User/User'
import UserActionsBar from '../UserActionsBar/UserActionsBar'
import UserService from '../../api/UserService'
import { UserInfoContext } from '../../context/UserInfoContext'
import { NotificationContext } from '../../context/NotificationContext'
import AdditionalOpportunityContext from '../../context/AdditionalOpportunityContext'

import './AddFriend.css'

const AddFriend = () => {
  const [friendName, setFriendName] = useState('')
  const [selectedFriend, setSelectedFriend] = useState(null)

	const {userInfo, setUserInfo} = useContext(UserInfoContext)
	const {notification, setNotification} = useContext(NotificationContext)
  const [id, setId] = useContext(AdditionalOpportunityContext);

  const [users, setUsers] = useState([])

  useEffect(() => {
    const newUsers = UserService.getUsers(userInfo.login)

    newUsers.then(
      newUsers => {
        if (!newUsers) {
          setNotification('Ошибка при получении списка людей')
        }
        else {
          setUsers(newUsers)
        }
      }
    )

    return setUsers([])
  }, [])

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
              users.map(user =>
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
