import React, {Component} from 'react';

//Utility functions
//import { getLogData } from './utils/getLogData.js'
//import { getBuildingData } from './utils/getBuildingData.js'
//import { getOpsData } from './utils/getOpsData.js'

import Login from './components/Login';
import MainScreen from './screens/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{fontFamily:"Arial"}}>Master View Controller (MVC) v.0.0.1</div>
        <br/><br/>
        <Login
          onLogin={event => {
            console.log('onLogin')
          }}
          onRegister={data => {
            console.log('onRegister')
          }}
        />
        <MainScreen/>
      </div>
    );
  }
}

export default App;
