import React, {useEffect} from 'react';

import socketIOClient from 'socket.io-client';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getBuildingData} from './redux-core/actions/building';
import {setNewNotification} from './redux-core/actions/notification';

import Typography from '@material-ui/core/Typography';
import MainScreen from './screens/Main';
import SnackbarMessage from './components/Snackbar';

const socketEndPoint = {
  office: 'http://192.168.2.17:7250/',
  home: 'http://192.168.0.14:7250/',
  office2: 'http://104.248.110.70:3000/',
};


function App({getBuildingData, setNewNotification}) {

  useEffect(() => {
    // API COLLECT DATA
    getBuildingData();
    const socket = socketIOClient(socketEndPoint.office2);

    socket.on('message', response => {
      _addNewNotification(response);
    });
  }, []);

  const _addNewNotification = data => {
    console.info('socket message: ', data);
    const testNotificationData = {
      acceptedCallTime: data.attended, //attended
      alarmType: data.alarmType,
      building: data.building,
      doorStation: data.doorstation,
      operator: data.operator,
      resolvedCallTime: null,
      timestamp: data.timeStamp,
    };
    setNewNotification(testNotificationData);
  };

  return (
    <div>
      <Typography
        variant={'display1'}
        gutterBottom={true}
      >
        Master View Controller (MVC) v.0.0.2f
      </Typography>
      <Typography
        variant={'title'}
        gutterBottom={true}
      >
        VDM oMVC 0.0.1d
      </Typography>
      <MainScreen/>
      <SnackbarMessage/>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getBuildingData,
  setNewNotification,
}, dispatch);

export default connect(null, mapDispatchToProps)(App)
