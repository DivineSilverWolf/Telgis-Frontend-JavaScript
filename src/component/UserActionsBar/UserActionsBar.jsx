import { React, useState, useEffect } from 'react'
import './UserActionsBar.css'

const UserActionsBar = () => {

  const actions = [
    {
      id: 1,
      name: 'Добавить друга' 
    },
    {
      id: 2,
      name: 'Удалить друга' 
    }
  ]

  const handleClick = (action) => {
    console.log(action.name)
  }

  return (
    <div className='user-actions-container'>
      {
      actions.map(action => {
        return (
          <div className="action-container" key={action.id} onClick={() => handleClick(action)} >
            <span className='action-item'>{action.name}</span>
          </div>
        )
      })
      }
    </div>
  )
}

export default UserActionsBar