import React from 'react'
import { useSelector } from "react-redux";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

export const VacationFollowersCharts = () => {

    const result = useSelector((state: any) => state.vacationsReducer.vacations)
    let data: any = [{}]
    result.map((vacation: { destination: any; followers: any; }) =>
        data.push({ vacation: vacation.destination, followers: vacation.followers, pv: 2400, amt: 2400 })
    )

    return (
        <div>

            <BarChart width={2000} height={500} data={data}>
                <XAxis dataKey="vacation" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="followers" fill="#black" barSize={30} />
            </BarChart>
        </div>
    )
}





