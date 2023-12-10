import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Main from './pages/MainPage/Main';
import Notification from './component/Notification/Notification';

import { LoginForm } from './pages/LoginForm'
import { RegisterForm } from './pages/RegisterForm'
import { AuthContext } from './context/AuthContext';


import './App.css';
import { UserInfoContext } from './context/UserInfoContext';
import { NotificationContext } from './context/NotificationContext';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [userInfo, setUserInfo] = useState({login: '', password: ''})
  const [notification, setNotification] = useState('')

  return (
    <div className='app'>
      <BrowserRouter>
        <AuthContext.Provider value={{isAuth, setIsAuth}} >
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
        <NotificationContext.Provider value={{notification, setNotification}}>

          { !isAuth ?
            <Routes>
              <Route path="/register" element={<RegisterForm/>} />
              <Route path="/login" element= {<LoginForm/>} />
              <Route exact path="/*" element={<RegisterForm />} />
            </Routes>
            :
              <Routes>
                <Route path="/main" element={<Main/>} />
                <Route exact path="/*" element={<Main/>} />
              </Routes>
          }

          {notification !== '' && <Notification />}

        </NotificationContext.Provider>
        </UserInfoContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter> 

    </div>
  )
}

export default App;
