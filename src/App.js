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
	}, []);


  return (
    <div style = {{backgroundImage: `url(${landingPage})`,backgroundSize: `contain`, height: `100%`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}}>
    	<a href={url}><button className="button">Sign In</button></a>
    </div>
  );
}
export default App;