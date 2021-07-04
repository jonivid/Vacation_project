import React, { useEffect, useState } from 'react'
import VacationModel from '../model/VacationModel'
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
import { deleteVacation, vacationToEdit } from '../../redux/vacationsActions'
import { useHistory } from 'react-router'





interface VacationsProps {
    vacation: VacationModel
}

export const VacationsCard = (props: VacationsProps): JSX.Element => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userState = useSelector((state: any) => state.userReducer.user)
    const vacations = (useSelector((state: any) => state.vacationsReducer.vacations))
    const [modalShow, setModalShow] = useState(false)
    const [followed, setFollowed] = useState(false)
    const [followers, setFollowers] = useState('')





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
        }
    }
    getIsUserFollowVacationState()

    const followHandle = async () => {
        try {
            const details = { userId: userState.userId, vacationId: props.vacation.id }
            await axios.post(`http://localhost:3001/follow/`, details)
            getVacationFollowerNum()
            getIsUserFollowVacationState()
            setFollowed(true)
        }
        catch (err) {

        }
    }
    const unFollowHandle = async () => {
        try {
            await axios.delete(`http://localhost:3001/follow/${userState.userId}/${props.vacation.id}`)
            getVacationFollowerNum()
            getIsUserFollowVacationState()
            setFollowed(false)

        }
        catch (err) {

        }
    }
    const deleteVacationHandle = async () => {
        const data = props.vacation
        try {
            await axios.delete(`http://localhost:3001/vacations/${data.id}`);
            const filteredVacations = vacations.filter(
                (vacation) => vacation.id !== data.id)
            console.log(filteredVacations);
            dispatch(deleteVacation(filteredVacations))
        }
        catch (err) {
            alert(err);

        }
    }
    const editVacationHandle = async (vacationDetails: any) => {
        const vacationProps = {
            id: vacationDetails.id,
            destenation: vacationDetails.destenation,
            details: vacationDetails.details,
            price: vacationDetails.price,
            startDate: vacationDetails.start_date,
            endDate: vacationDetails.end_date,
            image: vacationDetails.image
        }
        dispatch(vacationToEdit(vacationProps))
        history.push('/editvacation')

    }

    useEffect(() => {
        getVacationFollowerNum()
        getIsUserFollowVacationState()

    }, []);

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
        <Col sm="6" xl="4">
            <div className="wrapper">
                <Card className="cardMain" id="marg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.vacation.image} />
                    <Card.Body>
                        <Card.Text>
                            Followers:{followers}
                        </Card.Text>
                        {!userState.isAdmin && userState.loggedIn ? <IconContext.Provider value={{ color: "red", size: "30", className: "global-class-name" }}>
                            {!followed ? <button className="followIcon" onClick={() => {
                                followHandle()
                            }}><BsHeart /></button> : <button className="followIcon" onClick={() => {
                                unFollowHandle()
                            }}><BsFillHeartFill /></button>}
                        </IconContext.Provider> : console.log("admin is connected")
                        }
                        <Card.Title className="vacationDestenation">{props.vacation.destenation}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><h6 className="vacationDate">{props.vacation.start_date} - {props.vacation.end_date}</h6></Card.Subtitle>
                        <div >
                            <Card.Text>
                                price : {props.vacation.price} $
                            </Card.Text>
                            <Button onClick={() => {
                                setModalShow(true)

                            }}>more details</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)} vacationDetails={props.vacation.details} destanation={props.vacation.destenation} date={`${props.vacation.start_date} - ${props.vacation.end_date}`} />
                        </div>
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
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}


