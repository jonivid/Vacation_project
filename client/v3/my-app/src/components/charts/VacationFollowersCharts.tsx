import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";


export const VacationFollowersCharts = () => {

    const result = useSelector((state: any) => state.vacationsReducer.vacations)
    const [vacations, setVacations] = useState(result)
    let data: any = [{}]

    const getVacationFollowerNum = () => {
        vacations.map(async (vacation: any) => {
            try {
                const result = await axios.get(`http://localhost:3001/follow/vacationFollow/${vacation.id}`)
                vacation.followers = result.data[0]
                const dataObject = {
                    destenation: vacation.destenation,
                    followers: result.data[0].followers
                }
                data.push(dataObject)
                return

            }
            catch (err) {
            }
        })
    }

    getVacationFollowerNum()

    return (
        <div>
            {console.log(data)};
         
        </div>
    )
}





