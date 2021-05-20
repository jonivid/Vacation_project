import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './register.css'


export const Register = () => {
    const { register, handleSubmit } = useForm()

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


    const onRegisterClick = async () => {
        try {
            const response = axios.post('http://localhost:3001/users', { firstName, lastName, userName, password, isAdmin })
        }
        catch (err) {
            console.error(err);

        }
    }


    return (
        <div >

            <form className="center" onSubmit={handleSubmit(onRegisterClick)}>
                <h1>Register Page</h1><br />
                <div className="form-group">

                    <div className="form-group">
                        <label>First name</label><br />
                        <input type="text" name='firstName' className="form-control" placeholder='enter first Name' onChange={onFirstNameChange} /><br />

                        <label>Last name</label><br />
                        <input type="text" name='lastName' className="form-control" placeholder='enter last name' onChange={onLastNameChange} /><br />

                        <label>Username</label><br />
                        <input type="text" name='username' className="form-control" placeholder='User Name' onChange={onUserNameChanged} /><br />

                        <label>Password</label><br />
                        <input type="password" name='password' className="form-control" placeholder='Password' onChange={onPasswordChanged} /><br />
                        <button className="btn btn-dark btn-lg btn-block">CREATE USER</button>
                    </div>
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
    )
}
