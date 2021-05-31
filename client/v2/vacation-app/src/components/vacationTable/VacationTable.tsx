import React, { useEffect } from 'react'
import VacationModel from '../model/vacationModel'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


interface vacationTableProps {
    vacation: VacationModel
}

export const VacationsTable = (props: vacationTableProps) => {

    const deleteVacation = async () => {
        try {
            const data = props.vacation
            await axios.delete('http://localhost:3001/vacations', { data });

        }
        catch (err) {
            console.error(err);

        }

    }

    return (
        <tr>
            <td>{props.vacation.id}</td>
            <td>{props.vacation.destenation}</td>
            <td>{props.vacation.price}</td>
            <td>{props.vacation.start_date}</td>
            <td>{props.vacation.end_date}</td>
            <td>{props.vacation.followers}</td>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={() => deleteVacation()}>Delete</Button>
                <Button>Edit</Button>
            </ButtonGroup>
        </tr>
    )
}

