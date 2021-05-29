import React from 'react'
import VacationModel from '../model/vacationModel.js'
import Card from 'react-bootstrap/Card'
import './vacationCard.css'
import { Container, Row, Col } from 'reactstrap';


interface VacationsProps {
    vacation: VacationModel
}

export const VacationsCard = (props: VacationsProps): JSX.Element => {

    return (
        <Col sm="6" xl="4">
        <div className="wrapper">

            <Card className="cardMain" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.vacation.image} />
                <Card.Body>
                    <Card.Title className="vacationDestenation">{props.vacation.destenation}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.vacation.price}$</Card.Subtitle>
                    <Card.Text className="vacationDetails">
                        {props.vacation.details}
                    </Card.Text>
                    <div className="dateAndDetails">
                    <Card.Text>
                        Start date:{props.vacation.start_date}
                    </Card.Text>
                    <Card.Text>
                        End date: {props.vacation.end_date}
                    </Card.Text>

                        <Card.Link href="#">for more details</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </Col>



    )
}
//   {/* <p>{props.vacation.id}</p>
//             <p>{props.vacation.destenation}</p>
//             <p>{props.vacation.details}</p>
//             <p>{props.vacation.price}</p>
//             <p>{props.vacation.startDate}</p>
//             <p>{props.vacation.endDate}</p>
//             <p>{props.vacation.followers}</p> */}