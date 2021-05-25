import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VacationsCard } from '../vacations/VacationsCard'
import './homePage.css'

export const HomePage = () => {
    const [vacations, setVacations] = useState([])


    const getVacations = async () => {
        try {
            const result = (await axios.get('http://localhost:3001/vacations')).data
            setVacations(result)
        }
        catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        getVacations()
    }, []);

    return (
        <div className="container">
            <h1>Homepage</h1>
            {vacations.map((vacation) => (<VacationsCard vacation={vacation} />))}
        </div>
    )
}
