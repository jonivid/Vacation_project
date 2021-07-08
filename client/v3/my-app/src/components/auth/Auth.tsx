import axios from 'axios'
import React, { useEffect } from 'react'

export const Auth = () => {

    const token = localStorage.getItem("userToken")
    const authToken = async () => {
        try {
            const result = axios.get(`http://localhost:3001/users/${token}`)
            console.log(result);
        }
        catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        authToken()
    }, [])
    return (
        <div>
            <h1>
                {token}
            </h1>        </div>
    )
}
