import React, { useEffect, useState } from 'react'
// import VacationModel from '../model/VacationModel'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './vacationCard.css'
import { Col } from 'reactstrap';
import { BsHeart } from "react-icons/bs"
import { BsFillHeartFill } from "react-icons/bs"
import { IoTrashBinSharp } from "react-icons/io5"
import { RiEdit2Fill } from "react-icons/ri"
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { deleteVacation, IVacation, vacationToEdit } from '../../redux/vacationsActions'
import { useHistory } from 'react-router'

interface VacationsProps {
    vacation: IVacation;
}

export const VacationsCard = (props: VacationsProps): JSX.Element => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userState = useSelector((state: any) => state.userReducer.user)
    let vacations = (useSelector((state: any) => state.vacationsReducer.vacations))
    const [modalShow, setModalShow] = useState(false)
    const [followed, setFollowed] = useState(props.vacation.isUserFollow === userState.userId)
    const [followers, setFollowers] = useState(props.vacation.followers)

    const getVacationFollowerNum = async () => {
        try {
            const result = await axios.get(`http://localhost:3001/follow/vacationFollow/${props.vacation.id}`)
            setFollowers(result.data[0].followers)

        }
        catch (err) {
        }
    }
    const getIsUserFollowVacationState = async () => {
        try {
            const result = await axios.get(`http://localhost:3001/follow/${userState.userId}/${props.vacation.id}`)
            if (result.data.length > 0) {
                setFollowed(true)
            }
        }
        catch (err) {
            alert(err);
        }
    }
    const followHandle = async () => {
        try {
            const details = { userId: userState.userId, vacationId: props.vacation.id }
            await axios.post(`http://localhost:3001/follow/`, details)
            await getVacationFollowerNum()
            await getIsUserFollowVacationState()
            setFollowed(true)
        }
        catch (err) {
            alert(err);
        }
    }
    const unFollowHandle = async () => {
        try {
            await axios.delete(`http://localhost:3001/follow/${userState.userId}/${props.vacation.id}`)
            await getVacationFollowerNum()
            await getIsUserFollowVacationState()
            setFollowed(false)
        }
        catch (err) {
            alert(err);
        }
    }
    const deleteVacationHandle = async () => {
        const data = props.vacation
        try {
            await axios.delete(`http://localhost:3001/vacations/${data.id}`);
            const filteredVacations = vacations.filter(
                (vacation: any) => vacation.id !== data.id)
            dispatch(deleteVacation(filteredVacations))
        }
        catch (err) {
            alert(err);

        }
    }
    const editVacationHandle = async (vacationDetails: any) => {
        const vacationProps = {
            id: vacationDetails.id,
            destination: vacationDetails.destination,
            details: vacationDetails.details,
            price: vacationDetails.price,
            startDate: vacationDetails.startDate,
            endDate: vacationDetails.endDate,
            image: vacationDetails.image,
        }
        dispatch(vacationToEdit(vacationProps))
        history.push('/editvacation')

    }



    const MyVerticallyCenteredModal = (props: any) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>
                            {props.destanation}
                        </h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{props.date}</h4>
                    <p>
                        {props.vacationDetails}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Col sm="6" xl="4" >
            <div className="wrapper">
                <Card className="cardMain" id="marg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.vacation.image} />
                    <Card.Body>

                        {!userState.isAdmin && userState.loggedIn ? <IconContext.Provider value={{ color: "red", size: "30", className: "global-class-name" }}>
                            {!followed ? <button className="followIcon" onClick={() => {
                                followHandle()
                            }}><BsHeart /></button> : <button className="followIcon" onClick={() => {
                                unFollowHandle()
                            }}><BsFillHeartFill /></button>}
                            <Card.Text>
                                <span style={{ color: "black" }}>
                                    Followers:{followers}
                                </span>
                            </Card.Text>
                        </IconContext.Provider> : <span></span>
                        }
                        <Card.Title className="vacationdestination">{props.vacation.destination}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><h6 className="vacationDate">{props.vacation.startDate} - {props.vacation.endDate}</h6></Card.Subtitle>
                        <div >
                            <Card.Text >
                                <span style={{ color: "green" }}>
                                    price : {props.vacation.price} $
                                </span>
                            </Card.Text>
                            <Button onClick={() => {
                                setModalShow(true)

                            }}>more details</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)} vacationDetails={props.vacation.details} destanation={props.vacation.destination} date={`${props.vacation.startDate} - ${props.vacation.endDate}`} />
                        </div>
                        {userState.isAdmin && userState.loggedIn ?
                            <div>

                                <div className="delete-btn">
                                    <IconContext.Provider
                                        value={{ color: '#007bff', size: '35px', }}>
                                        <button className="delete-btn" onClick={() => deleteVacationHandle()}><IoTrashBinSharp /></button>
                                    </IconContext.Provider>
                                </div>
                                <div className="edit-btn">
                                    <IconContext.Provider
                                        value={{ color: '#007bff', size: '40px', }}>
                                        <button className="delete-btn" onClick={() => editVacationHandle(props.vacation)}><RiEdit2Fill /></button>
                                    </IconContext.Provider>
                                </div>
                            </div> : <span></span>}

                    </Card.Body>
                </Card>
            </div>
        </Col >
    )
}




