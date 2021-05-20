
import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './login.css'


export const Login = () => {
    const { register, handleSubmit } = useForm()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onUserNameChanged = (event: any) => {

        setUserName(event.target.value)
    }

    const onPasswordChanged = (event: any) => {
        setPassword(event.target.value)
    }

    const onLoginClicked = async () => {
        const result = await (axios.post('http://localhost:3001/users/login', { userName, password }))
        // console.log(result.data);
        if (result.data) localStorage.setItem("userToken", JSON.stringify(result.data))
        // Add a request interceptor
        const token = localStorage.getItem("userToken")
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            axios.defaults.headers.common['Authorization'] = null;
            /*if setting null does not remove `Authorization` header then try     
            delete axios.defaults.headers.common['Authorization'];
            */
        }
    }





    return (
        <div>
            <form className="center" onSubmit={handleSubmit(onLoginClicked)}>

                <h1>Login Page</h1>
                <div className="login-box">

                    <div className="form-group">
                        <label>Username</label><br />
                        <input type="text" name='username' placeholder='User Name' onChange={onUserNameChanged} /><br />
                        <label>Password</label> <br />
                        <input type="password" name='password' placeholder='Password' onChange={onPasswordChanged} /><br />
                        <button >Login</button>
                    </div>
                </div>
            </form>
        </div>
    )

}
