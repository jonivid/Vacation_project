import React from 'react'
import VacationModel from '../model/vacationModel.js'
import Card from 'react-bootstrap/Card'
import './vacationCard.css'

interface VacationsProps {
    vacation: VacationModel
}

export const VacationsCard = (props: VacationsProps): JSX.Element => {
    return (
        <div className="wrapper">

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.vacation.destenation}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.vacation.price}$</Card.Subtitle>
                    <Card.Text>
                        {props.vacation.details}
                    </Card.Text>
                    <Card.Text>
                        Start date: {props.vacation.startDate}
                    </Card.Text>
                    <Card.Text>
                        End date: {props.vacation.endDate}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>



    )
}
//   {/* <p>{props.vacation.id}</p>
//             <p>{props.vacation.destenation}</p>
//             <p>{props.vacation.details}</p>
//             <p>{props.vacation.price}</p>
//             <p>{props.vacation.startDate}</p>
//             <p>{props.vacation.endDate}</p>
//             <p>{props.vacation.followers}</p> */}