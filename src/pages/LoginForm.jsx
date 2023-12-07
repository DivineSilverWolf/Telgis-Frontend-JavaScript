import { React, useContext, useState } from 'react';
import { Link } from "react-router-dom"
import telgis from '../images/welcomeTelgis.png'
import UserService from '../api/UserService';

import './AuthForm.css'
import { UserInfoContext } from '../context/UserInfoContext';

export const LoginForm = () => {
	const [loginFields, setLoginFields] = useState({ login: '', password: ''})
	const {userInfo, setUserInfo} = useContext(UserInfoContext)

	const  handleSubmit = async(e) => {
		e.preventDefault()

		// validate

		const data = await UserService.postRegisterUser(loginFields.login, loginFields.password)

		if (data) {
			setUserInfo( { login : loginFields.login, password : loginFields.password } )
		}
		else {
			console.log('login error')
		}
	}

	return (
		<main className="main">
			<div className="authorization-container">
				<img src={telgis} alt="telgis"/>

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

					<p className="change-form">
						<span> Нет учетной записи? </span>
						<Link to="/register"> Зарегестрироваться </Link>
					</p>

				</form>
			</div>
		</main>
	)
}
