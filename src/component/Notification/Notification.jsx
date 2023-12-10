import { React, useContext } from 'react'
import './Notification.css'
import { NotificationContext } from '../../context/NotificationContext'

const Notification = () => {
	const { notification, setNotification } = useContext(NotificationContext)

  return (
    <div className='notification-container aos-init aos-animate' data-aos='fade-down' onClick={() => setNotification('')}>
      <div className='notification'>
        <p> {notification} </p>
      </div>
    </div>
  )
}

export default Notification
