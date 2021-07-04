import React, { useEffect, useState } from 'react'
import VacationModel from '../model/VacationModel'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { deleteVacation, IChartData, setVacationsChartData, vacationToEdit } from '../../redux/vacationsActions'
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


            //here we will send a dispatch to charts setVacationsChartData
        }
        catch (err) {
        }
    }
    const deleteVacationHandle = async () => {
        try {
            const data = props.vacation
            await axios.delete(`http://localhost:3001/vacations/${data.id}`);
            const filteredVacations = vacations.filter(
                (vacation:any) => vacation.id !== props.vacation.id)
            dispatch(deleteVacation(filteredVacations))
        }
        catch (err) {
            console.error(err);

        }
    }
    const editVacationHandle = () => {
        console.log(props.vacation);
        const vacation = {
            id: props.vacation.id,
            destenation: props.vacation.destenation,
            details: props.vacation.details,
            price: props.vacation.price,
            startDate: props.vacation.start_date,
            endDate: props.vacation.end_date,
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
            <td>{props.vacation.destenation}</td>
            <td>{props.vacation.price}</td>
            <td>{props.vacation.start_date}</td>
            <td>{props.vacation.end_date}</td>
            <td>{followers}</td>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={() => deleteVacationHandle()}>Delete</Button>
                <Button onClick={() => editVacationHandle()}>Edit</Button>
            </ButtonGroup>
        </tr>
    )
}



