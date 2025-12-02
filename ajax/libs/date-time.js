const displayTime = document.querySelector("#display-time");

function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}
showTime();

function updateDate() {
  let today = new Date();
  
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "/01/",
    "/02/",
    "/03/",
    "/04/",
    "/05/",
    "/06/",
    "/07/",
    "/08/",
    "/09/",
    "/10/",
    "/11/",
    "/12/",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const IDCollection = ["day", "daynum", "month", "year"];
  
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}
updateDate();
