import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VacationsCard } from '../vacations/VacationsCard'
import './homePage.css'
import { Container, Row } from 'reactstrap';
import { getAllVactions } from '../../redux/vacationsActions'
import { useDispatch, useSelector } from "react-redux";
import { MyCarousel } from '../carousel/MyCarousel';
import VacationModel from '../model/VacationModel';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export const HomePage = () => {
    const dispatch = useDispatch()
    const [vacations, setVacations] = useState([])





    useEffect(() => {
        const getVacations = async () => {
            try {
                const result = await axios.get('http://localhost:3001/vacations')
                const allVacations = result.data
                setVacations(allVacations)
                dispatch(getAllVactions(allVacations))
            }
            catch (err) {
                throw err
            }
        }
        getVacations()
    }, []);
    const stateVacations = useSelector((state: any) => state.vacationsReducer.vacations)

    return (
        <div >
            <Parallax pages={3} style={{ top: '0', left: '0', backgroundColor: '#e6ebe9' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    factor={1}>
                    <MyCarousel />
                    <h1 className="adminH1">Welcome to vacation paradise</h1>
                    <h2 className="adminH2">Here in Vidal-Tours you will find all the information you need  about your next vacation</h2>
                    <h3 className="adminH3">Vacations are an important part of life, whether you realize it or not. Taking time off will refresh and reset your mind, making you able to return to work with a clear head, and ready to take on what lies ahead. Many people don’t take all of the vacation time they’re allowed if they take any at all.  Well, we need to remedy that and realize how amazing time away can be! If it’s been a while since you planned a vacation or you just want a few guidelines to make sure you get the most out of the time you take off, we have collected some of the best vacations around in one place just for you. </h3>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#cbeff5' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                        display: 'block',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        position: "relative",
                        height: "fit-content",
                    }}>
                    <Container >
                        <Row>
                            {stateVacations.map((vacation: VacationModel, index: number) => (<VacationsCard vacation={vacation} key={index} />))}
                        </Row>

                    </Container>
                    <div>
                        <footer>
                            <h3 className="h3Home">
                                © 2021 Yehonatan Vidal.  All rights reserved</h3>
                        </footer>
                    </div>
                </ParallaxLayer><br />
                <ParallaxLayer
                    offset={3}
                    speed={0.5}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        backgroundColor: '#cbeff5',
                        position: "relative",
                    }}>
                    <div>
                        <footer>
                            <h3 className="h3Home">
                                © 2021 Yehonatan Vidal.  All rights reserved</h3>
                        </footer>
                    </div>
                </ParallaxLayer>
            </Parallax><br />


        </div >
    )
}


