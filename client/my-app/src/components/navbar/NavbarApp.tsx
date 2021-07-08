import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedOut } from '../../redux/userActions'
import './navbar.css'




export const NavbarApp = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userConnectionState = useSelector((state: any) => state.userReducer.user) || {}
    const { loggedIn, firstName } = userConnectionState

    const logOut = () => {
        const user = {
            isAdmin: false,
            loggedIn: false,
            firstName: "",
            lastName: "",

        }
        dispatch(setLoggedOut(user))
        history.push('/home')

        //@ts-ignore
        window.location.reload(false);

    }
    return (
        <div>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand as={Link} to='/home'>VidalTours</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {userConnectionState.isAdmin ?
                            (<>
                                <Nav.Link as={Link} to='/admin'>Admin Board</Nav.Link><br />
                                <Nav.Link as={Link} to='/addvacation'>
                                    Add vacation
                                </Nav.Link>
                            </>)
                            : (
                                console.log("admin is not connected")
                            )}

                        {!loggedIn ? <Nav.Link as={Link} to='/users/login'>Login</Nav.Link> : <Nav.Link as={Link} to='/users/login' onClick={() => logOut()}>Logout</Nav.Link>}
                    </Nav>
                    <Nav>

                        {loggedIn && <Navbar.Text>

                            <span className="navUserDetail">
                                connected as: {firstName}
                            </span>
                        </Navbar.Text>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )

}

