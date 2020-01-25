import React from 'react';
import './App.css';
import './components/button.css';
import landingPage from './components/assets/login.svg';
function App() {
  return (
    <div style = {{backgroundImage: `url(${landingPage})`,backgroundSize: `contain`, height: `100%`, backgroundPosition:`center`, backgroundRepeat: `no-repeat`}}>
    	<button class="button">Sign In</button>
    </div>
  );
}
export default App;