import React from 'react';
import {Grommet, Image, Box} from 'grommet';
import './App.css';
import Layout from './components/layout.js';
//import RedBackground from './components/assets/redbackground.jpg';
import RedBackground from './components/assets/RBackground.svg';
//import LayoutRashi from './components/LayoutRashi.js';

function App() {
  var divStyle = {
		height: '100%',
		width: '100%'
	}
  return (
    <div style = {{backgroundImage: `url(${RedBackground})`}}>
      {/* <style>
       
          {'body{background-color: #F9FAFB; }'}
        
      </style> */}  
      
        {/* <img src = {RedBackground} style = {divStyle} alt = 'red background' /> */}
 
      <Layout />
      {/* <Grommet plain>
        <Box full = 'true'>
          {/* <Image src = {RedBackground} alignSelf = 'stretch'/> */}
          {/* <img src = {RedBackground} alt = 'red background' height = {'100vh'} width = {'100vw'}/>
        
          <Layout />
        </Box> */}
        {/*<LayoutRashi />*/}
      {/* </Grommet>  */}
    </div>

  );
}

export default App;
