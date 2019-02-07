
export {getHeaders};

function getHeaders() {
   console.log("getHeaders");
   const headers = [
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
  ]
  return headers; 

}//getHeaders
