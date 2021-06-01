import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { UsersTable } from '../usersTable/UsersTable'
import { VacationsTable } from '../vacationTable/VacationTable'
import { Link } from "react-router-dom";

import './adminBoard.css'


export const AdminBoard = () => {
    const [users, setUsers] = useState([])
    const [vacations, setVacations] = useState([])
    const [userTable, setUserTable] = useState(false)
    const [vacationsTable, setvacationsTable] = useState(true)

    const getUsers = async () => {
        try {
            const result = (await axios.get('http://localhost:3001/users')).data
            setUsers(result)
        }
        catch (err) {
            console.error(err)
        }
    }
    const getVacations = async () => {
        try {
            const result = (await axios.get('http://localhost:3001/vacations')).data
            setVacations(result)
        }
        catch (err) {
            console.error(err)
        }
    }
    const isUsersTableActive = () => {
        setUserTable(!userTable)
        setvacationsTable(!vacationsTable)
    }
    const isvacationsTableActive = () => {
        setvacationsTable(!vacationsTable)
        setUserTable(!userTable)
    }
    useEffect(() => {
        getUsers()
        getVacations()

    }, [users,vacations])



    return (
        <div>
            <h1 className="adminH1">
                AdminBoard
            </h1>
            {vacationsTable ?
                (<button onClick={isUsersTableActive} className="changeTableBtn">Users table</button>)
                : (
                    <button onClick={isvacationsTableActive} className="changeTableBtn">Vactations table</button>
                )}
            <Link to='/addvacation'>
                <button className="changeTableBtn" >Add Vacation</button>
            </Link>
            {userTable ?
                (<Table striped bordered hover>
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
                </Table>)
                : (<Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>destenation</th>
                            <th>price</th>
                            <th>start_date</th>
                            <th>end_date</th>
                            <th>followers</th>
                        </tr>
                    </thead>
                    <tbody>

                        {vacations.map((vacation) => (
                            <VacationsTable vacation={vacation} />)
                        )}

                    </tbody>
                </Table>)}
        </div>
    )
}
