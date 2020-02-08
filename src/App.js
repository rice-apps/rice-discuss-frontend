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
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './landingPage.js';
import SignUp from "./signUp.js";

function App() {
	const cas_auth_url = "https://idp.rice.edu/idp/profile/cas/login";
	const service_url = "http://localhost:3000"
	const url = cas_auth_url + "?service=" + service_url;

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const ticket = urlParams.get('ticket');
	}, []);


  return (
    <div>
    	<LandingPage/>
    </div>
  );
}
export default App;