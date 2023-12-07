import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Main from './pages/MainPage/Main';
import { LoginForm } from './pages/LoginForm'
import { RegisterForm } from './pages/RegisterForm'
import { AuthContext } from './context/AuthContext';

import './App.css';
import { UserInfoContext } from './context/UserInfoContext';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [userInfo, setUserInfo] = useState({login: "", password: ""})

  return (
    <div className='app'>
      <BrowserRouter>
        <AuthContext.Provider value={{isAuth, setIsAuth}} >
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
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
        </UserInfoContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter> 

    </div>
  )
}

export default App;
