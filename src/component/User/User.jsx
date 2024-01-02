import { React, useState } from 'react'
import Emma from '../../images/Emma.jpg'
import './User.css'

const User = ({user, handleClickToUser}) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div 
      className={`user-info-container ${isSelected ? ' selected' : ' noselected'}`}
      onClick={() => handleClickToUser(user) }
    >
      <img src={user.avatar} alt="avatar" className='user-image'/>
        <span className='user-name'> <b> { user.login } </b> </span> 
    </div>
  )
}

export default User
