
export {processAlert};

function processAlert(data) {

    let testData = [];
    
   if (data[0].results) {
    console.log("initial");

    const currentTime = new Date().toLocaleString();
    testData = [
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
      return testData
  } else {
    console.log("new");
    testData = [
      {
        name: this.props.data[0].timeStamp,
        prop: "timestamp"
      },{
        name: this.props.data[0].building,
        prop: "building"
      },
      {
        name: this.props.data[0].doorStation,
        prop: "doorstation"
      },
      {
        name: this.props.data[0].operator,
        prop: "operator"
      },
      { 
        name: this.props.data[0].attended,
        prop: "attended"
      },
      {
        name: this.props.data[0].duration,
        prop: "duration"
      },
      {
        name: this.props.data[0].alarmtype,
        prop: "alarmtype"
      }
  ];//end testData Array
  console.log("processAlert - new notification: ", testData );
  return testData
  }//end iffy

}//end pocessAlert