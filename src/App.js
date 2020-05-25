import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import './components/button.css';
import LandingPage from './LandingPage.js';
import SignUp from './signUp.js';

function App() {
	const cas_auth_url = "https://idp.rice.edu/idp/profile/cas/login";
	const service_url = "http://localhost:3000"
	const url = cas_auth_url + "?service=" + service_url;

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const ticket = urlParams.get('ticket');

		if (ticket) {
			const backend_url = "http://localhost:3001/login";

			const query = {
				ticket: ticket,
				hello: "hiiiii",
				p: 1,
			};

			fetch(backend_url, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
				ticket: ticket,
				hello: "hiiiii",
				p: 1,
			}),
			}).then(res => {
				console.log(res);
				console.log("hi");
				return res.json();
			}).then(response => console.log(response));
		}
	}, []);


  return (
     <div>
    	<button className="button">Sign In</button>
    </div>
  );
}
export default App;
