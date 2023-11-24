import { React, useContext, useState } from 'react';
import { Link } from "react-router-dom"
import "./AuthForm.css"
import { AuthContext } from '../context/AuthContext';
import telgis from '../images/welcomeTelgis.png'
import UserService from '../api/UserService';

export const RegisterForm = () => {
	const [registerFields, setRegisterFields] = useState({ login: '', password: '', confirmPassword: '' })
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault()
		// UserService.postUser(registerFields.login, registerFields.password) 
		setIsAuth(!isAuth)
	}

	return (
		<div className="main">

			<div className="authorization-container">
				<img src={telgis} alt="telgis" />

				<form className="form-container" onSubmit={handleSubmit}>
					<h1 className="registration">Регистрация</h1>
					<input
						type="text"
						className="form-item"
						placeholder="Логин"
						value={registerFields.login}
						onChange={e => setRegisterFields({ ...registerFields, login: e.target.value })}
					/>
					<input
						type="password"
						className="form-item"
						placeholder="Пароль"
						value={registerFields.password}
						onChange={e => setRegisterFields({ ...registerFields, password: e.target.value })}
					/>
					<input
						type="password"
						className="form-item"
						placeholder="Повторить пароль"
						value={registerFields.confirmPassword}
						onChange={e => setRegisterFields({ ...registerFields, confirmPassword: e.target.value })}
					/>

					<button className="btn">Зарегистрироваться</button>

					<div className="has-account-container">
						<span className="has-account-text">
							Есть учетная запись?
							<Link to="/login"> Войти </Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	)
}