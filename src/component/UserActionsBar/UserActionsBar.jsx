import { React, useState, useEffect, useContext } from 'react'
import UserService from '../../api/UserService'
import { UserInfoContext } from '../../context/UserInfoContext'
import './UserActionsBar.css'


const UserActionsBar = ({ selectedUserLogin }) => {
  const [friendRequests, setFriendRequests] = useState([])
	const { userInfo, setUserInfo } = useContext(UserInfoContext)

  // useEffect(() => {
  //   getFriendConfirmation();
  // }, [])


  // const getFriendConfirmation = async () => {
  //   const data = await UserService.getFriendConfirmation()

  //   if (data) {
  //     data.isFriend ?
  //       `Пользователь ${data.login} теперь у вас в друзьях` 
  //       :
  //       `Пользователь ${data.login} отклонил вашу заявку в друзья` 
  //   }
  //   else {
  //     `Пользователь ${data.login} отклонил вашу заявку в друзья` 
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
    UserService.postFriendRequest(userInfo.login, selectedUserLogin)
    if (friendRequests.includes(selectedUserLogin)) {

    } 

    setFriendRequests(prev => [...prev, selectedUserLogin])
    console.log(action.name)
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