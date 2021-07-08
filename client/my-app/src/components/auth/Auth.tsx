import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setLoggedIn } from '../../redux/userActions'

export const Auth = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const authToken = async () => {
        try {
            const token = localStorage.getItem("userToken")
            const result = await axios.get(`http://localhost:3001/users/${token}`)
            if (result) {
                const user = { userId: result.data.id, isAdmin: result.data.isAdmin, loggedIn: true, firstName: result.data.firstName, lastName: result.data.lastName }
                console.log("user to redux", user);
                dispatch(setLoggedIn(user))
                axios.defaults.headers.common['Authorization'] = token;
                history.push('/home')
            }

        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        authToken()
    }, [])
    return (
        <>
        </>
    )
}


