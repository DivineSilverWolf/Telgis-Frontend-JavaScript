import exit from '../images/exit.png'
import addFriend from '../images/addFriend.png'
import addChat from '../images/addChat.png'
import settings from '../images/Settings.png'
import ChatCreator from '../component/ChatCreator/ChatCreator.jsx'
import AddFriend from '../component/AddFriend/AddFriend.jsx'

export const AdditionalOpportunityItems = [
  { id : 1, name: 'Настройки', img: settings, component: <> </>},
  { id : 2, name: 'Добавить друга', img: addFriend, component: <AddFriend/>},
  { id : 3, name: 'Добавить чат', img: addChat, component: <ChatCreator/> },
  { id : 4, name: 'Выйти', img: exit, component: <> </> }
]