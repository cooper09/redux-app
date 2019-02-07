
export {getData};

function getData(data) {
   console.log("getData");
   let dataArr = ["one", "two","Three"]

   if (data[0].results) {
    console.log("initial");

    const currentTime = new Date().toLocaleString();
    dataArr = [
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
      return dataArr;
  } else {
    console.log("new");
    dataArr = [
      {
        name: data[0].timeStamp,
        prop: "timestamp"
      },{
        name: data[0].building,
        prop: "building"
      },
      {
        name: data[0].doorStation,
        prop: "doorstation"
      },
      {
        name: data[0].operator,
        prop: "operator"
      },
      { 
        name: data[0].attended,
        prop: "attended"
      },
      {
        name: data[0].duration,
        prop: "duration"
      },
      {
        name: data[0].alarmtype,
        prop: "alarmtype"
      }
  ];//end testData Array
  console.log("MainScreen - new notification: ", dataArr )
  return dataArr; 
  }//end iffy
}//getData
