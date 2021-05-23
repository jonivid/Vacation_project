import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import { BrowserRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { Routing } from './components/routing/Routing'





function App() {
  return (
    <Router>

      <div>

        <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand as={Link} to='/users'>VidalTours</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to='/users/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/users/register'>Register</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
        </div>

        <div>
          <Routing />

        </div>
        <div>
         
        </div>








      </div>


    </Router>
  );
}

export default App;
