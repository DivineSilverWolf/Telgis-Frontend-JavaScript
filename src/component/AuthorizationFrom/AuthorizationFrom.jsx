import { Route, Routes } from "react-router-dom"
import { LoginForm } from "../../pages/LoginForm/LoginForm"
import { RegisterForm } from "../../pages/RegisterForm/RegisterForm"
import "./AuthorizationForm.css"
import telgis from '../../images/welcomeTelgis.png'

export const AuthorizationForm = () => {
    return (
        <div className="authorization-container">
            <img src={telgis} alt="telgis" />
            
            <Routes>
                <Route path="/register" element={<RegisterForm/>} />
                <Route path="/" element= {<LoginForm/>} />
            </Routes>

        </div>
    )
}