import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";


export const VacationFollowersCharts = () => {

    const result = useSelector((state: any) => state.vacationsReducer.vacations)
    const [vacations, setVacations] = useState(result)




    useEffect(() => {
        const getVacationFollowerNum = async () => {
            try {
                vacations.map(async vacation => {
                    const result = await axios.get(`http://localhost:3001/follow/vacationFollow/${vacation.id}`)
                    vacation.follower = result.data[0]
                })
            }
            catch (err) {
            }
        }
        getVacationFollowerNum()
    }, []);



    return (
        <div>
            <h1>hello

            </h1>
            {vacations.map(vacation => {
                <h1>hl</h1>
            })}
        </div>
    )
}





