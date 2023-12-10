import { React, useState, useEffect, useContext } from 'react'
import UserService from '../../api/UserService'
import { UserInfoContext } from '../../context/UserInfoContext'
import './UserActionsBar.css'
import { NotificationContext } from '../../context/NotificationContext'


const UserActionsBar = ({ selectedUserLogin }) => {
	const { userInfo, setUserInfo } = useContext(UserInfoContext)
	const {notification, setNotification} = useContext(NotificationContext)

  // useEffect(() => {
  //   getFriendConfirmation();
  // }, [])


  // const getFriendConfirmation = async () => {
  //   const data = await UserService.getFriendConfirmation()

  //   if (data) {
  //     data.isFriend ?
  //       setNotification(`Пользователь ${data.login} теперь у вас в друзьях`)
  //       :
  //       setNotification(`Пользователь ${data.login} отклонил вашу заявку в друзья`)
  //   }
  //   else {
  //     setNotification(`Пользователь ${data.login} отклонил вашу заявку в друзья`)
  //   }
  //   getFriendConfirmation();
  // }

  const actions = [
    {
      id: 1,
      name: 'Добавить друга' 
    },
    // {
    //   id: 2,
    //   name: 'Удалить друга' 
    // }
  ]

  const handleClick = (action) => {
    const res = UserService.postFriendRequest(userInfo.login, selectedUserLogin)

    if (!res) {
      setNotification('Ошибка при отправке заявки в друзья')
    }
  }

  return (
    <div className='user-actions-container'>
      {
      actions.map(action => {
        return (
          <div className="action-container" key={action.id} onClick={() => handleClick(action)} >
            <span className='action'>{action.name}</span>
          </div>
        )
      })
      }
    </div>
  )
}

export default UserActionsBar