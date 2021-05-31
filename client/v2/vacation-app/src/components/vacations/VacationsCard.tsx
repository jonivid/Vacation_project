import React, { useState } from 'react'
import VacationModel from '../model/vacationModel.js'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './vacationCard.css'
import { Container, Row, Col } from 'reactstrap';


interface VacationsProps {
    vacation: VacationModel
}


export const VacationsCard = (props: VacationsProps): JSX.Element => {
    const [modalShow, setModalShow] = useState(false)



    //@ts-ignore
    const MyVerticallyCenteredModal = (props) => {
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
                <Card className="cardMain" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.vacation.image} />
                    <Card.Body>
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
                    </Card.Body>
                </Card>

            </div>
        </Col>



    )
}
