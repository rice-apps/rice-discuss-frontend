import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
// import './components/button.css';
// import landingP from './components/assets/login.svg';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useEffect } from 'react';


function LandingPage(props) {

    const cas_auth_url = "https://idp.rice.edu/idp/profile/cas/login";
    const service_url = "http://localhost:3000";
    const url = cas_auth_url + "?service=" + service_url;

function login(e) {
    e.preventDefault();
    console.log("Reached login\n");
    console.log("Prevented default\n");

    const urlParams = new URLSearchParams(window.location.search);
    const ticket = urlParams.get('ticket');

    console.log(ticket);
    console.log("Before ticket\n");

    if (ticket) {
        const backend_url = "http://localhost:3001/login";

        const query = {
            ticket: ticket
        };

        fetch(backend_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
        }).then(res => console.log(res));
    }
}

 return (
      <Router>
        <Link to={url}>
            <button onClick={login}>
                Sign In
            </button>
        </Link>
    </Router>
  );
}
export default LandingPage;
