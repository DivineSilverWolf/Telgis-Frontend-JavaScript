import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage/Main';
import { LoginForm } from './pages/LoginForm'
import { RegisterForm } from './pages/RegisterForm'
import { AuthContext } from './context/AuthContext';
import CreateChatButton from './component/OpenAddOppButton/OpenAddOppButton';


const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className='app'>
      <BrowserRouter>
        <AuthContext.Provider value={{isAuth, setIsAuth}} >
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
        </AuthContext.Provider>
      </BrowserRouter> 

    </div>
  )
}

export default App;
