import React from 'react'
import { NavLink } from 'react-router-dom'


export const Menu = () => {
    return (
        <div>
            <h1>Welcome to my website</h1>

            <NavLink to='/users/login'>Login</NavLink><br />
            <NavLink to='/users/register'>Register</NavLink>


        </div>
    )
}
