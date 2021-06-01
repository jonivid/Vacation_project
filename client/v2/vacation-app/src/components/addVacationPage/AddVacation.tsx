import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './addVacation.css'
import { useHistory } from 'react-router-dom'

export const AddVacation = () => {
    const history = useHistory()
    const { handleSubmit } = useForm()

    const [destenation, setDestenation] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [image, setImage] = useState('')


    const onDestenationChange = (event: ChangeEvent<HTMLInputElement>) => {

        setDestenation(event.target.value)
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
            console.log({ destenation, details, price, startDate, endDate, image });
            const response = await axios.post('http://localhost:3001/vacations', { destenation, details, price, startDate, endDate, image })
            history.push('/admin')
        }
        catch (err) {
            console.error(err)
        }

    }

    return (
        <body className="createVacationBody">

            <div className="centerVacationForm">
                <form onSubmit={handleSubmit(onCreacteVacationClick)}>
                    <h1>add vacation</h1>
                    <div className="txtFieldRegister">
                        <label>Destenation</label><br />
                        <input type="text" name='destenation' className="form-control" placeholder='enter destenation' onChange={onDestenationChange} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Details</label><br />
                        <input  type="textarea" name='details' id="textArea" className="form-control" placeholder='enter details' onChange={onDetailsChange} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Price</label><br />
                        <input type="text" name='price' className="form-control" placeholder='enter price' onChange={onPriceChange} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Start date</label><br />
                        <input type="date" name='startDate' className="form-control" placeholder='enter start date' onChange={onStartDateChange} min="2021-06-01" /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>End date</label><br />
                        <input type="date" name='endDate' className="form-control" placeholder='enter end date' onChange={onEndDateChange} min="2021-06-01" /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Image</label><br />
                        <input type="text" name='image' className="form-control" placeholder='enter image' onChange={onImageChange} /><br />
                    </div>
                    <button className="addVacationBtn">Add Vacation</button>
                </form>
            </div>
        </body>
    )
}

// public id!:string;
// public destenation!:string;
// public details!:string;
// public price!:string;
// public start_date!:string;
// public end_date!:string;
// public followers!:string;
// public image!:string;