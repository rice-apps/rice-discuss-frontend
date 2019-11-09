import React from 'react';
import {Grommet} from 'grommet';
import './App.css';
import Layout from './components/layout.js';
//import LayoutRashi from './components/LayoutRashi.js';

function App() {
  return (
    <div>
      <style>
        {'body{background-color: #F9FAFB; }'}
      </style>
      <Grommet plain>
        <Layout />
        {/*<LayoutRashi />*/}
      </Grommet>
    </div>

  );
}

export default App;
