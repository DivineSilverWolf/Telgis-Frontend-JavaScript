import { React, useEffect, useState } from 'react'
import ChatList from '../ChatList/ChatList'
import Find from '../Find/Find'
import './LeftBar.css'
import showChatListButton from '../../images/showChatsButton.svg'
import TelgisButton from '../TelgisButton/TelgisButton'

const LeftBar = () => {
  const [visible, setVisible] = useState(true)
  const [searchedQuery, setSearchedQuery] = useState('')

  return (
    visible ? 
      <div className='left-bar-wrapper'>
        <Find 
          searchedQuery={searchedQuery}
          setSearchedQuery={setSearchedQuery}
          visible={visible} 
          setVisible={() => setVisible(!visible) }
        />
        <ChatList searchedQuery={searchedQuery}/>
      </div>
      :
      <TelgisButton img={showChatListButton} visible={visible} setVisible={setVisible} />
  )
}

export default LeftBar
