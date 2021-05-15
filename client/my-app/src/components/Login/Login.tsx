
import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onUserNameChanged = (event: any) => {

        setUserName(event.target.value)
    }

    const onPasswordChanged = (event: any) => {
        setPassword(event.target.value)
    }

    const onRegisterClick = () => {
        const response = axios.post('http://localhost:3001/users/login', { userName, password })
    }


    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" name='username' placeholder='User Name' onChange={onUserNameChanged} /><br />
            <input type="password" name='password' placeholder='Password' onChange={onPasswordChanged} /><br />
            <input type="button" value="Login" onClick={onRegisterClick} />

        </div>
    )
}
