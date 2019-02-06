import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeScreen } from '../actions/index';

import { bindActionCreators } from 'redux';

import { firstScreen, secondScreen, thirdScreen, fourthScreen, newNotification } from '../actions/index';

//import Table from '../containers/Table.js';
//import {Table} from '../containers/simpleTable2.js';
import Table from '../containers/uiTable'

class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          endpoint: "http://192.168.2.17:7250/",
          dataList: [],
          logList: [],
          opList: [],
          notification: {
            "test" : "data "
          },
          data: []
        }//end state
      }//end constructor

      componentWillMount() {        
      
      }//end componentWillMount
    
      onSubmit(newData) {
        alert("time for Action: " + newData);
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

      const currentTime = new Date().toLocaleString();
      const testData = [
        {
          name: currentTime,
          prop: "timestamp"
        },
        {
          name: "Site1165-628W238St",
          prop: "building"
        },
        {
          name: "0011-01.VDM",
          prop: "doorstation"
        },
        {
          name: "tbrooks",
          prop: "operator"
        },
        { 
          name: currentTime,
          prop: "attended"
        },
        {
          name: "00:00:12",
          prop: "duration"
        },
        {
          name: "VDM On",
          prop: "alarmtype"
        }
      ];

      return (
        <div className='center option animated fadeIn mainScrn'><br/><br/> 
                 
          <button className="closeBtn" onClick={()=> this.props.closeScreen("Close Screen")}>Logout</button>
          <br/><br/>
          <button onClick={()=> this.onSubmit(testData) } >Add Alert</button>
          <br/><br/>
          <Table  data={this.state.data}  headers={[
            {
              name: "Alarm time",
              prop: 'alarmTime'
            },
            {
              name: "Building",
              prop: 'building'
            },
            {
              name: "Doorstation",
              prop: 'doorStation'
            },
            {
              name: "Operator",
              prop: 'operator'
            },
            {
              name: "Attended",
              prop: 'attended'
            },
            {
              name: "Duration",
              prop: 'duration'
            },
            {
              name: "Alarm type",
              prop: 'alarmType'
            },
          ]} />
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
    return bindActionCreators({firstScreen, secondScreen, thirdScreen, fourthScreen, newNotification, closeScreen}, dispatch )
}//end mapDispatchToProps
    
export default connect(mapStateToProps, mapDispatchToProps) (MainScreen)
