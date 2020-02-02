import React from 'react';
import './App.css';
import './components/button.css';
import landingP from './components/assets/login.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function landingPage() {
  return (
    <div style = {{backgroundImage: `url(${landingP})`, width: `100vw` , height: `100vh`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}}>
    	    <Container> 
    	     	<Row className="show-grid">
                    <Col xs={1} md={4}></Col>
                    <Col xs={4} md={4}></Col>
                    <Button variant="light">Sign Up</Button>
                    <Col xs={1} md={4}></Col>
                </Row>
            </Container>
    </div>
  );
}
export default landingPage;