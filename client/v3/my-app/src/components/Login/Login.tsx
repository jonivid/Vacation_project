
import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './login.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoggedIn } from '../../redux/userActions'


export const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { handleSubmit } = useForm()

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
            let token = "Bearer " + result.data.token
            // relevant if we refresh the page yet still want to stay logged in (loacl storage) => to be continue....
            localStorage.setItem("userToken", token)
            axios.defaults.headers.common['Authorization'] = token;
            console.log(axios.defaults.headers.common);

            history.push('/home')
            const user = { userId: result.data.id, isAdmin: result.data.isAdmin, loggedIn: true, firstName: result.data.firstName, lastName: result.data.lastName }
            dispatch(setLoggedIn(user))
        }
        catch (err) {
            console.error(err)
            alert('error faild login')
        }
    }

    return (

        <body className="bodyLoginRegisterPage">

            <div className="center">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit(onLoginClicked)}>
                    <div className="txtField">
                        <label>Username</label>
                        <input type="text" name='username' onChange={onUserNameChanged} />
                        <span></span>
                    </div>
                    <br />
                    <div className="txtField">
                        <label>Password</label>
                        <input type="password" name='password' onChange={onPasswordChanged} />
                        <span></span>
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
