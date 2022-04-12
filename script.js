//Get Value
const clock = document.getElementById("time");

//Set Time
setInterval(function () {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString(); //Method
}, 1000);
