import React from 'react';
import './App.css';
import './components/button.css';
import landingP from './components/assets/login.svg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';

function landingPage() {
	const cas_auth_url = "https://idp.rice.edu/idp/profile/cas/login";
  	const service_url = "http://localhost:3000"
  	const url = cas_auth_url + "?service=" + service_url;

  	function authenticate() {
  		console.log("Made it to authenticate()");
  		fetch(url, {
  			method: 'GET',
  			headers: {
  				'Content-Type': 'application/json',
  				'Access-Control-Allow-Origin': '*'
  			}
  		}).then(res => console.log(res));

  		// const urlParams = new URLSearchParams(window.location.search);
    // 	const ticket = urlParams.get('ticket');

    // 	if (ticket) {
    //   		const backend_url = "http://localhost:3001/login";

    //   		const query = {ticket: ticket};

    //   		fetch(backend_url, {
    //     		method: 'POST',
    //     		headers: {
    //       			'Content-Type': 'application/json' 
    //     		},
    //     		body: JSON.stringify(query),
    //   		}).then(res => console.log(res));
  		// }
  	}

  // 	const authenticate = useEffect(() => {
  //   //const urlParams = new URLSearchParams(window.location.search);
  //   const urlParams = new URLSearchParams(cas_auth_url);
  //   const ticket = urlParams.get('ticket');

  //   if (ticket) {
  //     const backend_url = "http://localhost:3001/login";

  //     const query = {
  //       ticket: ticket
  //     };

  //     fetch(backend_url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json' 
  //       },
  //       body: JSON.stringify(query),
  //     }).then(res => console.log(res));
  //   }
  // }, []);
  return (
    <div style = {{backgroundImage: `url(${landingP})`, width: `100vw` , height: `100vh`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}}>
        <button class="btn" onClick={authenticate}>Sign Up</button>
    </div>
  );
}
export default landingPage;