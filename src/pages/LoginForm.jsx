import { React, useState } from 'react';
import { Link } from "react-router-dom"
import telgis from '../images/welcomeTelgis.png'
import UserService from '../api/UserService';

import './AuthForm.css'

export const LoginForm = () => {
	const [loginFields, setLoginFields] = useState({ login: '', password: '' })

	const handleSubmit = (e) => {
		e.preventDefault()
		// UserService.postUser(loginFields.login, loginFields.password);
	}

	return (
		<div className="main">
			<div className="authorization-container">
				<img src={telgis} alt="telgis" />
				<form className="form-container" onSubmit={handleSubmit}>
					<h1 className="registration">Вход</h1>
					<input
						type="text"
						className="form-item"
						placeholder="Логин"
						value={loginFields.login}
						onChange={e => setLoginFields({ ...loginFields, login: e.target.value })}
					/>
					<input
						type="password"
						className="form-item"
						placeholder="Пароль"
						value={loginFields.password}
						onChange={e => setLoginFields({ ...loginFields, password: e.target.value })}
					/>
					<button className="btn">Войти</button>

					<div className="has-account-container">
						<span className="has-account-text">
							Нет учетной записи?
							<Link to="/register"> Зарегестрироваться</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	)
}
