import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './register.css'
import { useHistory } from 'react-router-dom'




export const Register = () => {

    const history = useHistory()
    const { register, handleSubmit, setError, formState: { errors } } = useForm()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {

        setFirstName(event.target.value)
    }
    const onLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {

        setLastName(event.target.value)
    }
    const onUserNameChanged = (event: ChangeEvent<HTMLInputElement>) => {

        setUserName(event.target.value)
    }

    const onPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }





    const onRegisterClick = async () => {
        try {
            const response = await axios.post('http://localhost:3001/users', { firstName, lastName, userName, password })
            history.push('/users/login')
        }
        catch (err) {
            console.error(err);

        }
    }


    return (
        <body className="bodyLoginRegisterPage">

            <div className="centerRegister">

                <form onSubmit={handleSubmit(onRegisterClick)}>
                    <h1>Register Page</h1><br />


                    <div className="txtFieldRegister">
                        <label>First name</label><br />
                        <input type="text" name='firstName' className="form-control" placeholder='enter first Name' onChange={onFirstNameChange} /><br />
                    </div>
                    <div className="txtFieldRegister">

                        <label>Last name</label><br />
                        <input type="text" name='lastName' className="form-control" placeholder='enter last name' onChange={onLastNameChange} /><br />
                    </div>
                    <div className="txtFieldRegister">

                        <label>Username</label><br />
                        <input type="text" name='username' className="form-control" placeholder='User Name' onChange={onUserNameChanged} /><br />
                    </div>
                    <div className="txtFieldRegister">

                        <label>Password</label><br />
                        <input type="password" name='password' className="form-control" placeholder='Password' onChange={onPasswordChanged} /><br />
                    </div>

                    <button className="registerBtn">CREATE USER</button>
                    <div className="signUpLink">
                        Already registered ? <a href="/users/login">Sign in</a>
                    </div>
                    <br />
                    {/* <p>Is Admin (testing only)</p>
                <input type="radio" name="isAdmin" value="true" onChange={onIsAdminChange} />
            <label >true</label> */}
                    {/* <input type="radio" name="isAdmin" value="false" onChange={onIsAdminChange} />
                <label htmlFor="">false</label><br /> */}


                    {/* <input type="button" value="Register" onClick={onRegisterClick} /> */}
                </form >

            </div>
        </body>
    )
}
