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
  return (
    <div>
      <LandingPage/>
    </div>
  );
}
export default App;
