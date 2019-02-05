import React, { Component } from 'react';
import  Login  from './components/login.js';
import  MainScreen  from './components/mainscreen.js';

//Utility functions
import { getLogData } from './utils/getLogData.js'
import { getBuildingData } from './utils/getBuildingData.js'
import { getOpsData } from './utils/getOpsData.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logList: [],
      buildingList: [],
      opsList: []
    }//end state
  }//end constructor


//cooper s - collect all our data from current database
componentWillMount() {  
  // get our alerts      
  getLogData().then(result => {
    this.setState({
      logList: result
    });
  }).catch(err => {  
    alert("Error retrieving log data: " +  err );
  }); //end getData   

    // get our operators 
  getOpsData().then(result => {
    this.setState({
      opsList: result
    });
  }).catch(err => {  
    alert("Error retrieving log data: " +  err );
  }); //end getData   

  // get our buildings
  getBuildingData().then(result => {
    this.setState({
      buildingList: result
    });
    }).catch(err => {  
      alert("Error retrieving log data: " +  err );
    }); //end getData
  }//end componentWillMount

  render() {
    return (
      <div className="App">
        <div>Master View Controller (MVC) v.0.0.2</div>
        <div>Currently using React {React.version}</div>
        <br/><br/>
        <Login onLogin={ event =>{
          console.log('onLogin')
        }} onRegister={ data =>{
          console.log("onRegister")
        }} visible={this.props.state.screen} state={this.props.state} store={this.props.store}/>
      
        <MainScreen buildings={this.state.buildingList} operators={this.state.opsList} alerts={this.state.logList}/>
      </div>
    );
  }
}

export default App;
