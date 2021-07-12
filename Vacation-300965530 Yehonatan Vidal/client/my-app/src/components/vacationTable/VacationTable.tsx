import React, { useEffect, useState } from 'react'
import VacationModel from '../model/VacationModel'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { deleteVacation, vacationToEdit } from '../../redux/vacationsActions'
import { useHistory } from 'react-router'

interface vacationTableProps {
    vacation: VacationModel
}

export const VacationsTable = (props: vacationTableProps) => {
    const dispatch = useDispatch()
    const [followers, setFollowers] = useState('')
    const vacations = (useSelector((state: any) => state.vacationsReducer.vacations))
    const history = useHistory()


    const getVacationFollowerNum = async () => {
        try {
            const result = await axios.get(`http://localhost:3001/follow/vacationFollow/${props.vacation.id}`)
            setFollowers(result.data[0].followers)
        }
        catch (err) {
        }
    }
    const deleteVacationHandle = async () => {
        try {
            const data = props.vacation
            await axios.delete(`http://localhost:3001/vacations/${data.id}`);
            const filteredVacations = vacations.filter(
                (vacation: any) => vacation.id !== props.vacation.id)
            dispatch(deleteVacation(filteredVacations))
        }
        catch (err) {
            console.error(err);

        }
    }
    const editVacationHandle = () => {
        console.log(props.vacation);
        const vacation = {
            id: +props.vacation.id,
            destination: props.vacation.destination,
            details: props.vacation.details,
            price: props.vacation.price,
            startDate: props.vacation.startDate,
            endDate: props.vacation.endDate,
            image: props.vacation.image
        }
        dispatch(vacationToEdit(vacation))
        history.push('/editvacation')

    }

    useEffect(() => {
        getVacationFollowerNum()
    }, []);

    return (
        <tr>
            <td>{props.vacation.id}</td>
            <td>{props.vacation.destination}</td>
            <td>{props.vacation.price}</td>
            <td>{props.vacation.startDate}</td>
            <td>{props.vacation.endDate}</td>
            <td>{followers}</td>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={() => deleteVacationHandle()}>Delete</Button>
                <Button onClick={() => editVacationHandle()}>Edit</Button>
            </ButtonGroup>
        </tr>
    )
}



