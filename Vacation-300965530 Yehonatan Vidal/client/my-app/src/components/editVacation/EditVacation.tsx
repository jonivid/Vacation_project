import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
// import './addVacation.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from "react-redux";


export const EditVacation = () => {

    const history = useHistory()
    const vacationToEdit = useSelector((state: any) => state.vacationsReducer.vacationToEdit)
    const { handleSubmit } = useForm()
    const id = vacationToEdit.id
    const [destination, setdestination] = useState(vacationToEdit.destination)
    const [details, setDetails] = useState(vacationToEdit.details)
    const [price, setPrice] = useState(vacationToEdit.price)
    const [startDate, setStartDate] = useState(vacationToEdit.startDate)
    const [endDate, setEndDate] = useState(vacationToEdit.endDate)
    const [image, setImage] = useState(vacationToEdit.image)


    const ondestinationChange = (event: ChangeEvent<HTMLInputElement>) => {

        setdestination(event.target.value)
    }
    const onDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {

        setDetails(event.target.value)
    }
    const onPriceChange = (event: ChangeEvent<HTMLInputElement>) => {

        setPrice(event.target.value)
    }
    const onStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {

        setStartDate(event.target.value)
    }
    const onEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {

        setEndDate(event.target.value)
    }
    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {

        setImage(event.target.value)
    }

    const onCreacteVacationClick = async () => {
        try {
            const vacation = { id, destination, details, price, startDate, endDate, image }
            await axios.put('http://localhost:3001/vacations', vacation)
            history.push('/home')
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <body className="createVacationBody">
            <h1>edit</h1>
            <div className="centerVacationForm">
                <form onSubmit={handleSubmit(onCreacteVacationClick)}>
                    <h1>add vacation</h1>
                    <div className="txtFieldRegister">
                        <label>destination</label><br />
                        <input type="text" name='destination' className="form-control" placeholder='enter destination' onChange={ondestinationChange} value={destination} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Details</label><br />
                        <input type="textarea" name='details' id="textArea" className="form-control" placeholder='enter details' onChange={onDetailsChange} value={details} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Price</label><br />
                        <input type="text" name='price' className="form-control" placeholder='enter price' onChange={onPriceChange} value={price} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Start date</label><br />
                        <input type="date" name='startDate' className="form-control" placeholder='enter start date' onChange={onStartDateChange} min="2021-06-01" value={startDate} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>End date</label><br />
                        <input type="date" name='endDate' className="form-control" placeholder='enter end date' onChange={onEndDateChange} min="2021-06-01" value={endDate} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Image</label><br />
                        <input type="text" name='image' className="form-control" placeholder='enter image' onChange={onImageChange} value={image} /><br />
                    </div>
                    <button className="addVacationBtn">Submit changes</button>
                </form>
            </div>
        </body>
    )
}

