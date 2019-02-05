import React, { Component } from 'react';

//Test React-Table
import ReactTable from 'react-table';
//import 'react-table/react-table.css';

export default class Alerts extends Component {
  constructor(props){
    super(props);
    this.state = {
        test: "data",
        selected: -1
    }
  }//end constructor

  componentWillMount() {        
  }//end componentWillMount

  componentDidMount() {
  }//end componeentDidMount

  render() {
    let alerts = [];
    alerts = this.props.alerts;

    const columns = [
      {
        Header: "Alarm Time", 
        accessor: "TRIGGER_TIME",
      },
      {
        Header: "Building", 
        accessor: "BUILDING_NAME",
      },
      {
        Header: "Doorstation", 
        accessor: "DOOR_STATION_NAME",
      },
      {
        Header: "Operator", 
        accessor: "ATTENDED_BY_NAME",
      },
      {
        Header: "Attended", 
        accessor: "ATTEND_TIME",
      },
      {
        Header: "Duration", 
        accessor: "CALL_DURATION",
      },
      {
        Header: "Alarm", 
        accessor: "ALARM_TYPE",
      },
    ]

    return (
      <div className="Alert">
        <div>

          <ReactTable 
            data = {alerts}
            selected = 'true'
            columns={columns}
            style={{color: 'black', fontSize: '0.75em'}}
          />
        </div>
      </div>
    );//end return
  }//end render
}//end component

