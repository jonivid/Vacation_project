import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'

export const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState('')

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


    const onIsAdminChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsAdmin(event.target.value)
    }


    const onRegisterClick = () => {
        const response = axios.post('http://localhost:3001/users', { firstName, lastName, userName, password, isAdmin })
    }


    return (
        <div>
            <h1>Register Page</h1>

            <input type="text" name='firstName' placeholder='enter first Name' onChange={onFirstNameChange} /><br />
            <input type="text" name='lastName' placeholder='enter last name' onChange={onLastNameChange} /><br />
            <input type="text" name='username' placeholder='User Name' onChange={onUserNameChanged} /><br />
            <input type="password" name='password' placeholder='Password' onChange={onPasswordChanged} /><br />
            <p>Is Admin (testing only)</p>
            <input type="radio" name="isAdmin" value="true" onChange={onIsAdminChange} />
            <label >true</label>
            <input type="radio" name="isAdmin" value="false" onChange={onIsAdminChange} />
            <label htmlFor="">false</label>


            <input type="button" value="Register" onClick={onRegisterClick} />
        </div>
    )
}
