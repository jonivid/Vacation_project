import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { UsersTable } from '../usersTable/UsersTable'



export const AdminBoard = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const result = (await axios.get('http://localhost:3001/users')).data
            setUsers(result)
        }
        catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getUsers()

    }, [])



    return (
        <div>
            <h1>
                AdminBoard
            </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user) => (
                        <UsersTable user={user} />)
                    )}

                </tbody>
            </Table>

        </div>
    )
}
