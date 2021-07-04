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
                        <input
                            {...register("firstName", {
                                required: true, maxLength: 25, minLength: 2
                            })}
                            type="text" name='firstName'
                            className="form-control"
                            placeholder='enter first Name'
                            onChange={onFirstNameChange} />
                        {errors.firstName?.type === 'required' && "first Name is required"}
                        {errors.firstName?.type === 'minLength' && "first Name min length is 2 letters"}
                        {errors.firstName?.type === 'maxLength' && "first Name max length is 25 letters"}
                        <br />
                    </div>
                    <div className="txtFieldRegister">

                        <label>Last name</label><br />
                        <input
                            {...register("lastName", {
                                required: true, maxLength: 25, minLength: 2
                            })}
                            type="text" name='lastName'
                            className="form-control" placeholder='enter last name'
                            onChange={onLastNameChange} />
                        {errors.lastName?.type === 'required' && "last Name is required"}
                        {errors.lastName?.type === 'minLength' && "last Name min length is 2 letters"}
                        {errors.lastName?.type === 'maxLength' && "last Name max length is 25 letters"}
                        <br />
                    </div>
                    <div className="txtFieldRegister">

                        <label>Username</label><br />
                        <input
                            {...register("userName", {
                                required: true,


                            })}
                            type="email" name='userName'
                            className="form-control" placeholder='User Name'
                            onChange={onUserNameChanged} />
                        {errors.userName?.type === 'required' && "User Name is required"}

                        <br />
                    </div>
                    <div className="txtFieldRegister">
                        <label>Password</label><br />
                        <input
                            {...register("password", {
                                required: true, maxLength: 12, minLength: 6
                            })}
                            type="password" name='password'
                            className="form-control" placeholder='Password'
                            onChange={onPasswordChanged} />
                        {errors.password?.type === 'required' && "password is required"}
                        {errors.password?.type === 'minLength' && "password min length is 6 letters"}
                        {errors.password?.type === 'maxLength' && "password max length is 12 letters"}
                        <br />
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
