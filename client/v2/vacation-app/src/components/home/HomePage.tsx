import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VacationsCard } from '../vacations/VacationsCard'
import './homePage.css'
import { Container, Row } from 'reactstrap';

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
        <div>
            <h1 className="adminH1">Vacations</h1>
            <Container >
                <Row>
                    {vacations.map((vacation) => (<VacationsCard vacation={vacation} />))}
                </Row>
            </Container>

        </div>
    )
}
