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
import landingPage from './components/assets/login.svg';
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
    <div style = {{backgroundImage: `url(${landingPage})`,backgroundSize: `contain`, height: `100%`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}}>
    	<a href={url}><button className="button">Sign In</button></a>
    </div>
  );
}
export default App;