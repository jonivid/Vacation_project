import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { VacationFollowersCharts } from '../charts/VacationFollowersCharts'
import { VacationsTable } from '../vacationTable/VacationTable'
import { Link } from "react-router-dom";
import './adminBoard.css'
import { useSelector } from 'react-redux'


export const AdminBoard = () => {
    const [isChartOn, setIsChartOn] = useState(false)
    const [vacationsTable, setvacationsTable] = useState(true)

    const vacations = (useSelector((state: any) => state.vacationsReducer.vacations))
    const isUsersTableActive = () => {
        setIsChartOn(!isChartOn)
        setvacationsTable(!vacationsTable)
    }
    const isvacationsTableActive = () => {
        setvacationsTable(!vacationsTable)
        setIsChartOn(!isChartOn)
    }




    return (
        <div>
            <h1 className="adminH1">
                AdminBoard
            </h1>
            {vacationsTable ?
                (<button onClick={isUsersTableActive} className="changeTableBtn">Vacations Chart table</button>)
                : (
                    <button onClick={isvacationsTableActive} className="changeTableBtn">Vactations table</button>
                )}
            <Link to='/addvacation'>
                <button className="changeTableBtn" >Add Vacation</button>
            </Link>
            {isChartOn ? <VacationFollowersCharts />

                : (<Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>destination</th>
                            <th>price</th>
                            <th>startDate</th>
                            <th>endDate</th>
                            <th>followers</th>
                        </tr>
                    </thead>
                    <tbody>

                        {vacations.map((vacation: any, index: number) => (
                            <VacationsTable vacation={vacation} key={index} />)
                        )}

                    </tbody>
                </Table>)}
        </div>
    )
}
