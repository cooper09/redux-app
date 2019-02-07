import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

//Socket To Em!
import socketIOClient from "socket.io-client";

import { firstScreen, secondScreen, thirdScreen, fourthScreen, closeScreen } from '../actions/index';
import { newAlert,selectAlert } from '../actions/index';

import Table from '../containers/uiTable';

import { getData } from '../utils/getData';
import { getHeaders } from '../utils/getHeaders'

class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          endpoint: "http://104.248.110.70:3000",
          dataList: [],
          logList: [],
          opList: [],
          data: []
        }//end state
      }//end constructor

      componentWillMount() {        
      
      }//end componentWillMount

    
      onSubmit(newData) {
        //alert("time for Action: " + newData);
        this.setState({
          data: [...this.state.data, newData]
        })
      }

  render() {

    if (this.props.screen != 'Main Screen') {
        console.log("Main Screen is off");
     return false;
   }
      console.log("MainScreen - alerts: ", this.props.alerts );
      console.log("MainScreen - current data: ", this.state.data );
      console.log("MainScreen - data store: ", this.props.data );

      let headers = [];
      let testData = [];
      let currentData = this.props.data;

      headers = getHeaders();
      testData = getData(currentData);
      //alert ("getData testData: " + headers );

      return (
        <div className='center option animated fadeIn mainScrn'><br/><br/> 
                 
          <button className="closeBtn" onClick={()=> this.props.closeScreen("Close Screen")}>Logout</button>
          <br/><br/>
          <button onClick={()=> this.onSubmit(testData) } >Add Alert</button>
          <br/><br/>
          <Table store={this.props.store}  data={this.state.data} alert={this.props.data} headers={headers} />
        </div>
      
      )
   }//end render
}//end component


function mapStateToProps(state) {
    console.log("MainScreen - current state to map: ", state);
    return {
        data: state.mydata,
        screen: state.screen
    };
}//end mapStateToProps


function mapDispatchToProps(dispatch) {
    return bindActionCreators({firstScreen, secondScreen, thirdScreen, fourthScreen, newAlert, closeScreen}, dispatch )
}//end mapDispatchToProps
    
export default connect(mapStateToProps, mapDispatchToProps) (MainScreen)
