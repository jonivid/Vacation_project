
import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './login.css'
import { useHistory } from 'react-router-dom'


export const Login = () => {
    const history = useHistory()

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
        try {
            const result = await (axios.post('http://localhost:3001/users/login', { userName, password }))
            console.log(result);
            let token = "Bearer " + result.data.token
            // relevant if we refresh the page yet still want to stay logged in (loacl storage) => to be continue....
            localStorage.setItem("userToken", token)
            axios.defaults.headers.common['Authorization'] = token;

            if (result.data.isAdmin) {
                //go to admin page
                history.push('/admin')
            }
            else {
                //go to customer page
                history.push('/home');
            }
        }
        catch (err) {
            console.error(err)
            alert('error faild login')
        }
    }





    return (

        <body className="bodyLoginPage">

            <div className="center">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit(onLoginClicked)}>
                    <div className="txtField">
                        <input type="text" name='username' onChange={onUserNameChanged} />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <br />
                    <div className="txtField">
                        <input type="password" name='password' onChange={onPasswordChanged} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <button className="loginBtn" >Login</button>
                    <div className="signUpLink">
                        Not a member ? <a href="/users/register">Sign Up</a>
                    </div>
                </form>
            </div >
        </body>
    )

}
