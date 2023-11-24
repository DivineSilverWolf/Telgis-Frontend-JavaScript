import { React, useState } from 'react'
import './User.css'

const User = ({user, handleClickToUser}) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <li className={`user-info-container ${isSelected ? ' selected' : ' noselected'}`} onClick={() => handleClickToUser(setIsSelected, isSelected, user)}>
      <img src={user.avatar} alt="avatar" className='user-image'/>
      <b> 
        <span className='user-name'> { user.userName } </span> 
      </b>   
    </li>
  )
}

export default User
