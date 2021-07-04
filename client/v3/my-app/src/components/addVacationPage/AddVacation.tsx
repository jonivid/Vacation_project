import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './addVacation.css'
import { useHistory } from 'react-router-dom'
import { addVacation } from '../../redux/vacationsActions'
import { useDispatch } from "react-redux";


export const AddVacation = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { register, handleSubmit, setError, formState: { errors } } = useForm()
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
            const vacation = { destenation, details, price, startDate, endDate, image }
            const response = await axios.post('http://localhost:3001/vacations', vacation)
            dispatch(addVacation(vacation))
            history.push('/home')
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
                        <input
                            {...register("destenation", {
                                required: true, maxLength: 25, minLength: 2
                            })}
                            type="text" name='destenation'
                            className="form-control"
                            placeholder='enter destenation'
                            onChange={onDestenationChange} />
                        {errors.destenation?.type === 'required' && "destenation is required"}
                        {errors.destenation?.type === 'minLength' && "destenation min length 2 "}
                        {errors.destenation?.type === 'maxLength' && "destenation max length 25 "}


                        <br />
                    </div>

                    <div className="txtFieldRegister" >
                        <label>Details</label><br />
                        <input
                            // {...register("details", {
                            //     required: true, maxLength: 5000, minLength: 1
                            // })}
                            type="textarea"
                            name='details'
                            id="textArea"
                            className="form-control"
                            placeholder='enter details'
                            onChange={onDetailsChange} />
                        <br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Price</label><br />
                        <input
                            // {...register("price", {
                            //     required: true, min: 1
                            // })}
                            type="text"
                            name='price'
                            className="form-control"
                            placeholder='enter price'
                            onChange={onPriceChange} /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Start date</label><br />
                        <input
                            // {...register("startDate", {
                            //     required: true
                            // })}
                            type="date"
                            name='startDate'
                            className="form-control"
                            placeholder='enter start date'
                            onChange={onStartDateChange} min="2021-06-01" /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>End date</label><br />
                        <input
                            // {...register("endDate", {
                            //     required: true
                            // })}
                            type="date"
                            name='endDate'
                            className="form-control"
                            placeholder='enter end date'
                            onChange={onEndDateChange} min="2021-06-01" /><br />
                    </div>
                    <div className="txtFieldRegister" >
                        <label>Image</label><br />
                        <input
                            // {...register("test", {
                            //     required: true
                            // })}
                            type="text"
                            name='image'
                            className="form-control"
                            placeholder='enter image'
                            onChange={onImageChange} /><br />
                    </div>
                    <button
                        type="submit"
                        className="addVacationBtn">
                        Add Vacation</button>
                </form>
            </div>
        </body>
    )
}

