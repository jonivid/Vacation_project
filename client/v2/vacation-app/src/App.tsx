import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from './components/routing/Routing'
import { NavbarApp } from './components/navbar/NavbarApp'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarApp />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
