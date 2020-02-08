import React from 'react';
import './App.css';
import './components/button.css';
import landingP from './components/assets/login.svg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function landingPage() {
  return (
    <div style = {{backgroundImage: `url(${landingP})`, width: `100vw` , height: `100vh`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}}>
        <button class="btn">Sign Up</button>
    </div>
  );
}
export default landingPage;